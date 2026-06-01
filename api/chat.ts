import { GoogleGenAI } from "@google/genai";

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("GEMINI_API_KEY is not defined in environment variables.");
    return new Response(JSON.stringify({ error: 'Service configuration error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { prompt, context, systemInstruction } = await req.json();

    const ai = new GoogleGenAI({ apiKey });
    // Maintaining the model version from the original service
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: context ? `${context}\n\nUser Question: ${prompt}` : prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const text = response.text;

    return new Response(JSON.stringify({ text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    // Sanitize logging to prevent leaking any sensitive data
    const message = error instanceof Error ? error.message : "Internal AI Error";
    console.error("Edge AI Error:", message);

    return new Response(JSON.stringify({ error: "Failed to process AI request" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
