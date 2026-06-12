export const config = { runtime: 'edge' };
export default async function handler(req: Request) {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 });
  try {
    const { prompt, context } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return new Response('API Key missing', { status: 500 });
    const system = "You are ArcSystem PRO, a professional Architect AI Consultant. Use technical terms and Markdown.";
    const contents = [{ parts: [{ text: context ? `${context}\n\nUser Question: ${prompt}` : prompt }] }];
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents, system_instruction: { parts: [{ text: system }] }, generationConfig: { temperature: 0.7 } }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error?.message || 'Gemini error');
    return new Response(JSON.stringify({ text: data.candidates?.[0]?.content?.parts?.[0]?.text || '' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
