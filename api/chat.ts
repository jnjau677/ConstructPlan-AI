import { IncomingMessage, ServerResponse } from 'http';
import { GoogleGenAI } from '@google/genai';

export const config = {
  api: {
    bodyParser: false,
  },
};

function collectRequestBody(req: IncomingMessage): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on('data', (chunk) => {
      chunks.push(chunk);
    });
    req.on('end', () => {
      resolve(Buffer.concat(chunks));
    });
    req.on('error', (err) => {
      reject(err);
    });
  });
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    return;
  }

  try {
    const rawBody = await collectRequestBody(req);
    const bodyString = rawBody.toString('utf-8');

    let parsedBody: any = {};
    if (bodyString) {
      try {
        parsedBody = JSON.parse(bodyString);
      } catch (err) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Invalid JSON request body' }));
        return;
      }
    }

    const { prompt, context } = parsedBody;

    if (!prompt || typeof prompt !== 'string') {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Prompt is required and must be a string' }));
      return;
    }

    // Enforce 4000-character limit on backend service level
    if (prompt.length > 4000) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Prompt exceeds maximum length of 4000 characters.' }));
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'API Configuration error' }));
      return;
    }

    const ai = new GoogleGenAI({ apiKey });
    const systemInstruction = `You are "ArcSystem PRO", a high-end professional Architect and Construction AI Consultant.
  Your capabilities include:
  1. Chat-to-Build Engine: Natural language modeling for architectural iteration.
  2. Sketch-to-Scale: Understanding computer vision for CAD vectors.
  3. Smart Engineering: Stair, roof, and foundation logic.
  4. Generative Styling: Scandinavian, Modern, Industrial templates.
  5. One-Click Takeoff: Live BOQ and LEED LCA forecasting.
  6. Immersive Collaboration: AR on-site visualization.

  Format your responses professionally with architectural terminology. Use Markdown. Always focus on technical precision paired with creative flexibility.`;

    const contents = context ? `${context}\n\nUser Question: ${prompt}` : prompt;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ text: response.text }));
  } catch (error) {
    // Fail securely - generic message and no leaked internals/stack traces
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'An unexpected error occurred in the Gemini API' }));
  }
}
