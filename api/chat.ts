/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Secure proxy for Gemini AI to prevent API key exposure in client bundle.
export default async function handler(req: Request) {
  if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });

  try {
    const { prompt, context } = await req.json();
    if (typeof prompt !== 'string' || prompt.length > 5000) {
      return new Response('Invalid input', { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return new Response('Server Configuration Error', { status: 500 });

    const systemInstruction = `You are "ArcSystem PRO", a high-end professional Architect and Construction AI Consultant. Use architectural terminology and focus on technical precision.`;

    const apiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: context ? `${context}\n\nUser Question: ${prompt}` : prompt }] }],
        systemInstruction: { parts: [{ text: systemInstruction }] },
        generationConfig: { temperature: 0.7 }
      }),
    });

    if (!response.ok) return new Response('AI Service Unavailable', { status: 502 });

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';
    return new Response(JSON.stringify({ text }), { headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response('Internal Error', { status: 500 });
  }
}
