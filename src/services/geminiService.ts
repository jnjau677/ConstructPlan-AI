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

function sanitizeError(error: unknown): string {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!error) return "Unknown error";

  let msg = "";
  if (error instanceof Error) {
    msg = `${error.name}: ${error.message}`;
    if (error.stack) {
      msg += `\nStack: ${error.stack}`;
    }
  } else {
    msg = String(error);
  }

  if (apiKey) {
    msg = msg.split(apiKey).join("[REDACTED_API_KEY]");
  }
  return msg;
}

export async function askAiArchitect(prompt: string, context?: string) {
  // Input validation
  const totalLength = prompt.length + (context ? context.length : 0);
  if (totalLength > 4000) {
    throw new Error("Input payload exceeds maximum allowed security limit of 4000 characters.");
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
    const safeErrorMsg = sanitizeError(error);
    console.error("Gemini API Error:", safeErrorMsg);
    throw new Error("BIM cluster query failed due to system latency or API communication issue.");
  }
}
