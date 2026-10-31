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

// Security: Limit prompt size to prevent payload exhaustion / denial of service
const MAX_PROMPT_LENGTH = 4000;

export async function askAiArchitect(prompt: string, context?: string) {
  // Input validation: Enforce length limits and non-empty input
  const sanitizedPrompt = typeof prompt === 'string' ? prompt.trim() : '';
  if (!sanitizedPrompt) {
    throw new Error("Prompt cannot be empty.");
  }
  if (sanitizedPrompt.length > MAX_PROMPT_LENGTH) {
    throw new Error(`Prompt exceeds maximum allowed length of ${MAX_PROMPT_LENGTH} characters.`);
  }

  const sanitizedContext = typeof context === 'string' && context.length <= MAX_PROMPT_LENGTH
    ? context.trim()
    : undefined;

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
    // Security: Avoid logging raw error objects that may leak API keys or request URLs in console
    const message = error instanceof Error ? error.message : "Internal error";
    console.error("Gemini API request failed:", message);
    throw new Error("Failed to generate response from AI Architect.");
  }
}
