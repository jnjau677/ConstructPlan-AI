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

const MAX_INPUT_LENGTH = 4000;

export async function askAiArchitect(prompt: string, context?: string) {
  if (!prompt || typeof prompt !== 'string') {
    throw new Error("Prompt must be a valid non-empty string.");
  }
  // Enforce length limit to protect against payload DoS and resource exhaustion
  const sanitizedPrompt = prompt.trim().slice(0, MAX_INPUT_LENGTH);
  const sanitizedContext = context ? context.trim().slice(0, MAX_INPUT_LENGTH) : undefined;

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
      contents: sanitizedContext ? `${sanitizedContext}\n\nUser Question: ${sanitizedPrompt}` : sanitizedPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    // Sanitize console logging to prevent sensitive internal data/credentials from leaking in client logs
    const safeErrorMessage = error instanceof Error ? error.message : "Unknown API error";
    console.error("Gemini API Error:", safeErrorMessage);
    throw new Error("Failed to process request due to a service error.");
  }
}
