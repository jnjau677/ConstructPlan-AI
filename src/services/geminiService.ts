import { GoogleGenAI } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

export function getGeminiAI() {
  if (!aiInstance) {
    let apiKey: string | undefined;
    try {
      apiKey = process.env.GEMINI_API_KEY;
    } catch {
      // process is not defined at runtime
    }
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not defined in environment variables.");
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
}

function sanitizeError(err: unknown): Error {
  let key: string | undefined;
  try {
    key = process.env.GEMINI_API_KEY;
  } catch {
    // process is not defined at runtime
  }
  let msg = err instanceof Error ? err.message : String(err);
  if (key && msg.includes(key)) {
    msg = msg.replaceAll(key, "[REDACTED]");
  }
  return new Error(msg);
}

export async function askAiArchitect(prompt: string, context?: string) {
  if (prompt.length > 4000) {
    throw new Error("Input exceeds maximum allowed limit of 4000 characters.");
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
