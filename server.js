const express = require('express');
const cors = require('cors');
const OpenAI = require('openai'); // Direct import of OpenAI
require('dotenv').config();

// Initialize express app and middleware
const app = express();
app.use(cors());
app.use(express.json());

// OpenAI API setup
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // API key directly passed here
});

// Endpoint for handling API requests
app.post('/api/chatgpt', async (req, res) => {
  const { prompt } = req.body;

  console.log('Incoming request:', prompt);

  try {
    const openaiResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `
          I have a business idea, and I need help breaking it down into the following fields:

          1. Industry
          2. Target Market
          3. Problem Statement
          4. Value Proposition
          5. Key Features
          6. Competitive Analysis
          7. Potential Challenges
          8. Next Suggested Steps

          Here’s the business idea: "${prompt}"

          Please respond in the following JSON format:

          {
            "Industry": "",
            "Target Market": "",
            "Problem Statement": "",
            "Value Proposition": "",
            "Key Features": [],
            "Competitive Analysis": "",
            "Potential Challenges": "",
            "Next Suggested Steps": ""
          }
          `
        }
      ],
    });

    // Log the full response
    console.log('Full OpenAI API Response:', JSON.stringify(openaiResponse, null, 2));

    // Access and parse the content from the response
    const content = openaiResponse.choices[0].message.content;

    // Send the parsed JSON back to the client
    res.json(JSON.parse(content));

  } catch (error) {
    console.error('Error with OpenAI API:', error);
    res.status(500).json({ error: 'Error generating summary from OpenAI API' });
  }
});



// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
