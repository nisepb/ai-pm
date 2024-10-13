// backend/index.js

require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

// backend/index.js

app.post('/api/chatgpt', async (req, res) => {
    const { prompt } = req.body;
    console.log('Received prompt:', prompt);
  
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo', // or 'gpt-3.5-turbo' if GPT-4 is not available
          messages: [
            { role: 'system', content: 'You are an expert business consultant.' },
            { role: 'user', content: prompt },
          ],
          max_tokens: 500, // Adjust this value as needed
          temperature: 0.7,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          },
        }
      );
  
      console.log('Received response from OpenAI');
      const aiResponse = response.data.choices[0].message.content;
      res.json(aiResponse);
    } catch (error) {
      console.error('Error communicating with OpenAI API:', error.message);
      res.status(500).json({ error: error.message });
    }
  });
  
  

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});
