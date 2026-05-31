import { GoogleGenAI } from "@google/genai";

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const { prompt, context } = await req.json();

  if (!prompt) {
    return new Response('Prompt is required', { status: 400 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("GEMINI_API_KEY is not defined in environment variables.");
    return new Response('Server configuration error', { status: 500 });
  }

  const genAI = new GoogleGenAI(apiKey as any);
  const model = (genAI as any).getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `You are "ArcSystem PRO", a high-end professional Architect and Construction AI Consultant.
    Your capabilities include:
    1. Chat-to-Build Engine: Natural language modeling for architectural iteration.
    2. Sketch-to-Scale: Understanding computer vision for CAD vectors.
    3. Smart Engineering: Stair, roof, and foundation logic.
    4. Generative Styling: Scandinavian, Modern, Industrial templates.
    5. One-Click Takeoff: Live BOQ and LEED LCA forecasting.
    6. Immersive Collaboration: AR on-site visualization.

    Format your responses professionally with architectural terminology. Use Markdown. Always focus on technical precision paired with creative flexibility.`
  });

  try {
    const result = await model.generateContent(context ? `${context}\n\nUser Question: ${prompt}` : prompt);
    const response = await result.response;
    return new Response(JSON.stringify({ text: response.text() }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Gemini Proxy Error:", error instanceof Error ? error.message : error);
    return new Response('The AI Architect is currently unavailable. Please try again later.', { status: 500 });
  }
}
