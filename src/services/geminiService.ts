import { GoogleGenAI } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

export function getGeminiAI() {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not defined in environment variables.");
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
}

function sanitizeError(error: any): Error {
  if (!error) return new Error("Unknown error");
  const apiKey = process.env.GEMINI_API_KEY;
  let msg = error.message || String(error);
  let stack = error.stack || "";

  if (apiKey) {
    const escapedKey = apiKey.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(escapedKey, 'g');
    msg = msg.replace(regex, '[REDACTED]');
    stack = stack.replace(regex, '[REDACTED]');
  }

  const sanitized = new Error(msg);
  sanitized.stack = stack;
  return sanitized;
}

export async function askAiArchitect(prompt: string, context?: string) {
  const promptLength = prompt ? prompt.length : 0;
  const contextLength = context ? context.length : 0;
  if (promptLength + contextLength > 4000) {
    throw new Error("Input exceeds maximum allowed length of 4000 characters.");
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
    const sanitizedError = sanitizeError(error);
    console.error("Gemini API Error:", sanitizedError);
    throw sanitizedError;
  }
}
