export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { prompt } = req.body || {};

  if (!prompt || !prompt.trim()) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'Missing GEMINI_API_KEY environment variable' });
  }

  try {
    const endpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent';
    const response = await fetch(`${endpoint}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }]
          }
        ]
      })
    });

    if (!response.ok) {
      const errorPayload = await response.text();
      console.error('Gemini error:', errorPayload);
      return res.status(response.status).json({ error: 'Gemini API request failed' });
    }

    const data = await response.json();
    const text = (data?.candidates || [])
      .flatMap(candidate => candidate?.content?.parts || [])
      .map(part => part?.text)
      .filter(Boolean)
      .join('\n') || 'No content returned from Gemini.';

    return res.status(200).json({ text });
  } catch (error) {
    console.error('Gemini handler error:', error);
    return res.status(500).json({ error: 'Gemini handler exception' });
  }
}
