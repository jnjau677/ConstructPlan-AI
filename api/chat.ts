import { IncomingMessage, ServerResponse } from 'http';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    return;
  }

  let body = '';
  for await (const chunk of req) {
    body += chunk;
  }

  try {
    const { prompt, context } = JSON.parse(body);

    if (!prompt) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Prompt is required' }));
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'GEMINI_API_KEY is not configured' }));
      return;
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
          contents: [
            {
              role: 'user',
              parts: [{ text: context ? `${context}\n\nUser Question: ${prompt}` : prompt }],
            },
          ],
          systemInstruction: {
            parts: [{ text: systemInstruction }],
          },
          generationConfig: {
            temperature: 0.7,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      res.statusCode = response.status;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Gemini API error', details: errorData }));
      return;
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ text }));
  } catch (error) {
    console.error('API Error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
}
