const functions = require('firebase-functions');
const cors = require('cors')({origin: true});

exports.geminiProxy = functions.region('us-central1').https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method !== 'POST') {
      res.set('Allow', 'POST');
      res.status(405).json({error: 'Method Not Allowed'});
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY || functions.config().gemini?.key;
    if (!apiKey) {
      functions.logger.error('Gemini API key missing');
      res.status(500).json({error: 'Gemini API key not configured'});
      return;
    }

    const prompt = req.body?.prompt;
    if (!prompt || !prompt.trim()) {
      res.status(400).json({error: 'Prompt is required'});
      return;
    }

    try {
      const endpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
      const response = await fetch(`${endpoint}?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{text: prompt}]
            }
          ]
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        functions.logger.error('Gemini request failed', {status: response.status, errorText});
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
      functions.logger.error('Gemini proxy error', error);
      res.status(500).json({error: 'Gemini proxy encountered an error'});
    }
  });
});
