export const config = { runtime: 'edge' };
export default async function handler(req: Request) {
  if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });
  try {
    const { prompt, context } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return new Response(JSON.stringify({ error: 'API key not configured' }), { status: 500 });
    const systemInstruction = `You are "ArcSystem PRO", a high-end professional Architect and Construction AI Consultant.
  Capabilities: Chat-to-Build, Sketch-to-Scale, Smart Engineering, Generative Styling, One-Click Takeoff, Immersive Collaboration.
  Format responses professionally with architectural terminology. Use Markdown.`;
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemInstruction }] },
        contents: [{ parts: [{ text: context ? `${context}\n\nUser Question: ${prompt}` : prompt }] }]
      }),
    });
    const data = await res.json();
    if (data.error) return new Response(JSON.stringify({ error: data.error.message }), { status: res.status });
    return new Response(JSON.stringify({ text: data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response.' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
