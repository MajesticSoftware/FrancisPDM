export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({error: 'Method Not Allowed'});
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({error: 'GEMINI_API_KEY is not configured'});
    return;
  }

  const prompt = req.body?.prompt;
  const systemPrompt = req.body?.systemPrompt || '';
  
  if (!prompt || !prompt.trim()) {
    res.status(400).json({error: 'Prompt is required'});
    return;
  }

  try {
    const endpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
    
    const requestBody = {
      contents: [
        {
          role: 'user',
          parts: [{text: prompt}]
        }
      ]
    };

    if (systemPrompt) {
      requestBody.systemInstruction = {
        parts: [{text: systemPrompt}]
      };
    }

    const response = await fetch(`${endpoint}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error', response.status, errorText);
      res.status(response.status).json({error: 'Gemini API request failed'});
      return;
    }

    const data = await response.json();
    const text = (data?.candidates || [])
      .flatMap((candidate) => candidate?.content?.parts || [])
      .map((part) => part?.text)
      .filter(Boolean)
      .join('\n') || 'No content returned from Gemini.';

    res.status(200).json({text});
  } catch (error) {
    console.error('Gemini handler error', error);
    res.status(500).json({error: 'Gemini handler encountered an error'});
  }
}
