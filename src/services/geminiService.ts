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

export async function askAiArchitect(prompt: string, context?: string) {
  if (!prompt || typeof prompt !== 'string') {
    throw new Error("Invalid prompt input.");
  }

  // Security: Enforce length limit (4000 chars) to prevent excessive token payload / DoS
  const MAX_INPUT_LENGTH = 4000;
  const safePrompt = prompt.trim().slice(0, MAX_INPUT_LENGTH);
  const safeContext = context ? context.trim().slice(0, MAX_INPUT_LENGTH) : undefined;

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
      contents: safeContext ? `${safeContext}\n\nUser Question: ${safePrompt}` : safePrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    // Security: Sanitize log output to prevent credential/config leak in error objects
    console.error("Gemini API Error:", error instanceof Error ? error.message : "An unexpected error occurred");
    throw error;
  }
}
