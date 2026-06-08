export const config = { runtime: 'edge' };

export default async function handler(req: Request) {
  if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });

  try {
    const { prompt, context } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return new Response(JSON.stringify({ error: 'Config error' }), { status: 500 });

    const systemInstruction = `You are "ArcSystem PRO", a professional Architect and Construction AI. Use architectural terminology and Markdown. Focus on technical precision and creative flexibility.`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemInstruction }] },
        contents: [{ parts: [{ text: context ? `${context}\n\nUser Question: ${prompt}` : prompt }] }]
      })
    });

    const data = await response.json();
    if (!response.ok) {
      console.error('Gemini error:', data.error?.message);
      return new Response(JSON.stringify({ error: 'AI failure' }), { status: response.status });
    }

    return new Response(JSON.stringify({ text: data.candidates?.[0]?.content?.parts?.[0]?.text || '' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error('Proxy error:', error.message);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}
