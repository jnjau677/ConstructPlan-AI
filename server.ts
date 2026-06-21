import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Security: Serve static files from dist in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
}

const SYSTEM_INSTRUCTION = `You are "ArcSystem PRO", a high-end professional Architect and Construction AI Consultant.
Your capabilities include:
1. Chat-to-Build Engine: Natural language modeling for architectural iteration.
2. Sketch-to-Scale: Understanding computer vision for CAD vectors.
3. Smart Engineering: Stair, roof, and foundation logic.
4. Generative Styling: Scandinavian, Modern, Industrial templates.
5. One-Click Takeoff: Live BOQ and LEED LCA forecasting.
6. Immersive Collaboration: AR on-site visualization.

Format your responses professionally with architectural terminology. Use Markdown. Always focus on technical precision paired with creative flexibility.`;

app.post('/api/chat', async (req, res) => {
  const { prompt, context } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error('GEMINI_API_KEY is not configured');
    return res.status(500).json({ error: 'Internal server error' });
  }

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: context ? `${context}\n\nUser Question: ${prompt}` : prompt }
            ]
          }
        ],
        systemInstruction: {
          parts: [
            { text: SYSTEM_INSTRUCTION }
          ]
        },
        generationConfig: {
          temperature: 0.7,
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API error:', errorData);
      return res.status(response.status).json({ error: 'Failed to generate content' });
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';

    res.json({ text });
  } catch (error) {
    console.error('Proxy Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// For Vercel or other platforms, we might want to handle SPA routing
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Security Proxy active on http://localhost:${port}`);
});
