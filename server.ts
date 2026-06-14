import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
app.use(express.json());

const port = 3001;

app.post('/api/chat', async (req, res) => {
  const { prompt, context } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY not configured' });
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

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: context ? `${context}\n\nUser Question: ${prompt}` : prompt
          }]
        }],
        system_instruction: {
          parts: [{ text: systemInstruction }]
        },
        generationConfig: {
          temperature: 0.7,
        }
      })
    });

    const data: any = await response.json();

    if (!response.ok) {
      console.error('Gemini API error:', data);
      return res.status(response.status).json({ error: 'Failed to generate response' });
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';
    res.json({ text });
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Local proxy server running at http://localhost:${port}`);
});
