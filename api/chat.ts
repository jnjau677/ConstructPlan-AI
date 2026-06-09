export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { prompt, context } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("Missing GEMINI_API_KEY");
      return new Response(JSON.stringify({ error: 'Server configuration error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const systemInstruction = `You are "ArcSystem PRO", a high-end professional Architect and Construction AI Consultant.
Your capabilities include:
1. Chat-to-Build Engine: Natural language modeling for architectural iteration.
2. Sketch-to-Scale: Understanding computer vision for CAD vectors.
3. Smart Engineering: Stair, roof, and foundation logic.
4. Generative Styling: Scandinavian, Modern, Industrial templates.
5. One-Click Takeoff: Live BOQ and LEED LCA forecasting.
6. Immersive Collaboration: AR on-site visualization.

Format your responses professionally with architectural terminology. Use Markdown. Always focus on technical precision paired with creative flexibility.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: systemInstruction }]
          },
          contents: [
            {
              parts: [
                { text: context ? `${context}\n\nUser Question: ${prompt}` : prompt }
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
       console.error("Gemini API Error:", data.error?.message || "Unknown error");
       return new Response(JSON.stringify({ error: 'AI processing failed' }), {
         status: 500,
         headers: { 'Content-Type': 'application/json' },
       });
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    return new Response(JSON.stringify({ text }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error("Proxy Error:", error.message);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
