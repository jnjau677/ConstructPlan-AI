import { GoogleGenAI } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

export function getGeminiAI() {
  if (!aiInstance) {
    let apiKey: string | undefined = undefined;
    try {
      apiKey = process.env.GEMINI_API_KEY;
    } catch (e) {
      // Safe fallback if process is not defined
    }
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not defined in environment variables.");
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
}

function sanitizeError(error: any): Error {
  let apiKey: string | undefined = undefined;
  try {
    apiKey = process.env.GEMINI_API_KEY;
  } catch (e) {
    // Safe fallback if process is not defined
  }
  if (!apiKey) return error instanceof Error ? error : new Error(String(error));

  const errorMsg = error instanceof Error ? error.message : String(error);
  const errorStack = error instanceof Error ? error.stack : undefined;

  // Escape API key special characters for RegExp pattern
  const escapedKey = apiKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(escapedKey, 'g');

  const sanitizedMsg = errorMsg.replace(regex, '[REDACTED_API_KEY]');
  const sanitizedError = new Error(sanitizedMsg);

  if (errorStack) {
    sanitizedError.stack = errorStack.replace(regex, '[REDACTED_API_KEY]');
  }

  return sanitizedError;
}

export async function askAiArchitect(prompt: string, context?: string) {
  // Input validation: Enforce a character limit of 4000 to prevent payload size issues
  if (prompt.length > 4000) {
    throw new Error("Input exceeds maximum character limit of 4000.");
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
    const sanitized = sanitizeError(error);
    console.error("Gemini API Error:", sanitized.message);
    throw sanitized;
  }
}
