const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export async function POST(req: Request) {
  const { prompt, context } = await req.json();
  if (!prompt) return Response.json({ error: "Prompt required" }, { status: 400 });
  if (!GEMINI_API_KEY) return Response.json({ error: "API key missing" }, { status: 500 });

  const sys = "You are ArcSystem PRO, a professional Architect AI consultant.";

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: context ? `${context}\n\n${prompt}` : prompt }] }],
        systemInstruction: { parts: [{ text: sys }] }
      }),
    });

    const data = await response.json();
    return Response.json({ text: data.candidates?.[0]?.content?.parts?.[0]?.text || "No response" });
  } catch (err: any) {
    return Response.json({ error: "AI communication failed" }, { status: 500 });
  }
}
