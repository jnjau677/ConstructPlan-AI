import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
const systemInstruction = `You are "ArcSystem PRO", a high-end professional Architect and Construction AI Consultant.
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
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: context ? `${context}\n\nUser Question: ${prompt}` : prompt }] }],
        systemInstruction: { parts: [{ text: systemInstruction }] }
      }),
    });
    const data = await response.json();
    res.json({ text: data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response.' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Error' });
  }
});
app.listen(3001);
