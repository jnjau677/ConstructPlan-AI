export const config = { runtime: 'edge' };
export default async function handler(req: Request) {
  if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });
  try {
    const { prompt, context } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return new Response(JSON.stringify({ error: 'API Key not configured' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    const systemInstruction = `You are "ArcSystem PRO", a high-end professional Architect and Construction AI Consultant.
  Capabilities: Chat-to-Build, Sketch-to-Scale, Smart Engineering, Generative Styling, One-Click Takeoff, Immersive Collaboration.
  Format professionally with architectural terminology. Use Markdown. Focus on technical precision.`;
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemInstruction }] },
        contents: [{ parts: [{ text: context ? `${context}\n\nUser Question: ${prompt}` : prompt }] }],
        generationConfig: { temperature: 0.7 }
      }),
    });
    const data = await response.json();
    if (data.error) {
       console.error("Gemini API Error:", data.error.message);
       return new Response(JSON.stringify({ error: "AI communication error" }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
    return new Response(JSON.stringify({ text: data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated." }), { headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    console.error("Proxy Error:", error.message);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
