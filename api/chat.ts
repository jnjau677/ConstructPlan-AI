// ✅ GOOD: Use Edge Runtime for secure, low-latency API proxying
export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  // ✅ GOOD: Validate request method
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { prompt, context } = await req.json();

    // ✅ GOOD: Secrets are accessed only on the server, never exposed to the client
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Internal configuration error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // ✅ GOOD: System instructions are kept server-side to prevent prompt injection or leakage
    const systemInstruction = `You are "ArcSystem PRO", a high-end professional Architect and Construction AI Consultant.
Your capabilities include:
1. Chat-to-Build Engine: Natural language modeling for architectural iteration.
2. Sketch-to-Scale: Understanding computer vision for CAD vectors.
3. Smart Engineering: Stair, roof, and foundation logic.
4. Generative Styling: Scandinavian, Modern, Industrial templates.
5. One-Click Takeoff: Live BOQ and LEED LCA forecasting.
6. Immersive Collaboration: AR on-site visualization.

Format your responses professionally with architectural terminology. Use Markdown. Always focus on technical precision paired with creative flexibility.`;

    const model = "gemini-1.5-flash";

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: context ? `${context}\n\nUser Question: ${prompt}` : prompt }],
            },
          ],
          system_instruction: {
            parts: [{ text: systemInstruction }],
          },
          generationConfig: {
            temperature: 0.7,
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      // ✅ GOOD: Sanitize error responses to avoid leaking sensitive internal details
      console.error('Gemini API Error:', data);
      return new Response(JSON.stringify({ error: 'Failed to generate content' }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    return new Response(JSON.stringify({ text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // ✅ GOOD: Fail securely with a generic error message
    console.error('Handler Error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
