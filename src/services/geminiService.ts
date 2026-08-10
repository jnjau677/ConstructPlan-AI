import { GoogleGenAI } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

function sanitizeError(error: any, apiKey?: string): Error {
  if (!error) return new Error("Unknown error");
  let msg = typeof error === "string" ? error : error.message || String(error);
  let stack = error.stack || "";

  if (apiKey && apiKey.length > 5) {
    const escapedKey = apiKey.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const keyRegex = new RegExp(escapedKey, 'g');
    msg = msg.replace(keyRegex, '[REDACTED_API_KEY]');
    stack = stack.replace(keyRegex, '[REDACTED_API_KEY]');
  }

  const genericApiKeyRegex = /AIzaSy[A-Za-z0-9-_]{33}/g;
  msg = msg.replace(genericApiKeyRegex, '[REDACTED_API_KEY]');
  stack = stack.replace(genericApiKeyRegex, '[REDACTED_API_KEY]');

  const sanitized = new Error(msg);
  sanitized.stack = stack;
  return sanitized;
}

export function getGeminiAI() {
  if (!aiInstance) {
    let apiKey: string | undefined;
    try {
      apiKey = process.env.GEMINI_API_KEY;
    } catch (e) {
      // process may not be defined in some browser environments
    }
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not defined in environment variables.");
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
}

export async function askAiArchitect(prompt: string, context?: string) {
  if (!prompt || typeof prompt !== 'string') {
    throw new Error("Invalid prompt provided.");
  }
  if (prompt.length > 4000) {
    throw new Error("Prompt exceeds maximum allowed length of 4000 characters.");
  }

  let apiKey: string | undefined;
  try {
    apiKey = process.env.GEMINI_API_KEY;
  } catch (e) {
    // Fail-safe if process is not defined
  }

  const ai = getGeminiAI();
  const systemInstruction = `You are "ArcSystem PRO", a high-end professional Architect and Construction AI Consultant. 
  Your capabilities include:
  1. Chat-to-Build Engine: Natural language modeling for architectural iteration.
  2. Sketch-to-Scale: Understanding computer vision for CAD vectors.
  3. Smart Engineering: Stair, roof, and foundation logic.
  4. Generative Styling: Scandinavian, Modern, Industrial templates.
  5. One-Click Takeoff: Live BOQ and LEED LCA forecasting.
  6. Immersive Collaboration: AR on-site visualization.
  
  Format your responses professionally with architectural terminology. Use Markdown. Always focus on technical precision paired with creative flexibility.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: context ? `${context}\n\nUser Question: ${prompt}` : prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    const sanitized = sanitizeError(error, apiKey);
    console.error("Gemini API Error:", sanitized.message);
    throw sanitized;
  }
}
