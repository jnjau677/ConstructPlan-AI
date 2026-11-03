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

// Maximum allowable prompt character length to guard against resource exhaustion and payload bloat
export const MAX_PROMPT_LENGTH = 4000;

export async function askAiArchitect(prompt: string, context?: string) {
  // Security input validation: prevent unbounded payloads and prompt bloat
  if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
    throw new Error("Invalid input: Prompt cannot be empty.");
  }
  if (prompt.length > MAX_PROMPT_LENGTH) {
    throw new Error(`Input length exceeded: Prompt must be under ${MAX_PROMPT_LENGTH} characters.`);
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
  } catch (error: any) {
    // Security sanitization: avoid logging raw error objects that may expose API keys, headers, or internal network topology
    const safeErrorMessage = error?.message || "Unknown error during AI generation";
    console.error("Gemini API request failed:", safeErrorMessage);
    throw new Error("Failed to process architectural request securely. Please try again.");
  }
}
