export const config = { runtime: 'edge' };

export default async function handler(req: Request) {
  if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });
  const { prompt, context } = await req.json();
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return new Response('API Key missing', { status: 500 });

  const systemInstruction = `You are "ArcSystem PRO", a high-end professional Architect and Construction AI Consultant. Format responses professionally with architectural terminology. Use Markdown. Focus on technical precision and creative flexibility.`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: context ? `${context}\n\nUser Question: ${prompt}` : prompt }] }],
      systemInstruction: { parts: [{ text: systemInstruction }] },
      generationConfig: { temperature: 0.7 }
    }),
  });

  if (!response.ok) return new Response('API Error', { status: response.status });
  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';
  return new Response(JSON.stringify({ text }), { headers: { 'Content-Type': 'application/json' } });
}
