import { IncomingMessage, ServerResponse } from 'http';
import { GoogleGenAI } from "@google/genai";

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  if (req.method !== 'POST') {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    return;
  }

  try {
    const body = await new Promise<string>((resolve, reject) => {
      const chunks: Buffer[] = [];
      req.on('data', (chunk) => chunks.push(chunk));
      req.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
      req.on('error', reject);
    });

    const { prompt, context } = JSON.parse(body);

    if (!prompt) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Prompt is required' }));
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
      return;
    }

    const client = new GoogleGenAI({ apiKey });

    const systemInstruction = `You are "ArcSystem PRO", a high-end professional Architect and Construction AI Consultant.
    Your capabilities include:
    1. Chat-to-Build Engine: Natural language modeling for architectural iteration.
    2. Sketch-to-Scale: Understanding computer vision for CAD vectors.
    3. Smart Engineering: Stair, roof, and foundation logic.
    4. Generative Styling: Scandinavian, Modern, Industrial templates.
    5. One-Click Takeoff: Live BOQ and LEED LCA forecasting.
    6. Immersive Collaboration: AR on-site visualization.

    Format your responses professionally with architectural terminology. Use Markdown. Always focus on technical precision paired with creative flexibility.`;

    const result = await client.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [{ role: 'user', parts: [{ text: context ? `${context}\n\nUser Question: ${prompt}` : prompt }] }],
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ text: result.text || '' }));
  } catch (error) {
    console.error('Gemini API Error:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
}
