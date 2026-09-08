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
  const MAX_INPUT_LENGTH = 4000;
  if (!prompt || typeof prompt !== 'string' || prompt.length > MAX_INPUT_LENGTH) {
    throw new Error(`Input prompt must be a non-empty string and under ${MAX_INPUT_LENGTH} characters.`);
  }
  if (context && (typeof context !== 'string' || context.length > MAX_INPUT_LENGTH)) {
    throw new Error(`Input context must be under ${MAX_INPUT_LENGTH} characters.`);
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
    // Sanitize log output to prevent credential or internal configuration leaks
    const errorMessage = error instanceof Error ? error.message : "An error occurred";
    console.error("Gemini API Error:", errorMessage);
    throw new Error("AI request failed due to a service error.");
  }
}
