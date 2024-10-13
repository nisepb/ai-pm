import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import {
  Box,
  Typography,
  TextField,
  Button,
  Fade,
  CircularProgress,
} from '@mui/material';
import axios from 'axios';
import { AppContext } from '../context/AppContext';  // Import AppContext to set the executive summary

function IdeaInput() {
  const [userIdea, setUserIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseError, setResponseError] = useState('');
  const { setExecutiveSummary } = useContext(AppContext);  // Get setExecutiveSummary from context
  const navigate = useNavigate();  // Initialize navigate for page redirection

  const handleSubmitIdea = async () => {
    if (!userIdea.trim()) {
      setResponseError('Please enter your business idea.');
      return;
    }

    setLoading(true);
    setResponseError('');

    const prompt = `
      You are an expert business consultant. Based on the following business idea, generate an executive summary covering these sections:

      - Industry (2 or 3 words max)
      - Target Market (example: Young professionals (ages 25-40) interested in improving fitness without hiring a personal trainer.)
      - Problem Statement (brief)
      - Value Proposition (example: This app offers AI-driven personalized fitness plans tailored to...)
      - Key Features (list at least 5, be concise)
      - Competitive Analysis (Are there any competition? What does this idea do different? Be concise)
      - Potential Challenges (be concise)
      - Next Suggested Steps (example: Define MVP features, conduct survey to validate user interest, and identify development tools.)

      Please provide the response in JSON format as shown below.

      Business Idea:
      "${userIdea}"

      Response Format:
      {
        "Industry": "",
        "Target Market": "",
        "Problem Statement": "",
        "Value Proposition": "",
        "Key Features": ["", "", "", "", ""],
        "Competitive Analysis": "",
        "Potential Challenges": "",
        "Next Suggested Steps": ""
      }
    `;

    try {
      const result = await axios.post('http://localhost:5001/api/chatgpt', {
        prompt: prompt,
      });

      const data = result.data;

      // Attempt to parse the JSON response
      let summary;
      try {
        console.log('API response:', data);
        summary = (typeof data === 'string') ? JSON.parse(data) : data;
      } catch (parseError) {
        console.error('Error parsing the executive summary:', parseError);
        setResponseError('Error parsing the executive summary.');
        setLoading(false); // Stop loading on error
        return;
      }

      setExecutiveSummary(summary);  // Set summary to context
      navigate('/summary');  // Navigate to the summary page after success
    } catch (error) {
      console.error('Error calling the API', error);
      setResponseError('There was an error generating your summary.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fade in={true} timeout={1000}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="70vh"
        textAlign="center"
        mt={5}
      >
        <Typography
          variant="h4"
          fontWeight="600"
          mb={3}
          sx={{ fontSize: '1.8rem' }}
        >
          Enter Your Business Idea
        </Typography>
        <TextField
          id="business-idea"
          name="businessIdea"
          fullWidth
          multiline
          rows={4}
          label="Describe your idea here..."
          variant="outlined"
          value={userIdea}
          onChange={(e) => setUserIdea(e.target.value)}
          sx={{ width: '70%', backgroundColor: '#ffffff' }}
          error={Boolean(responseError)}
          helperText={responseError}
        />
        <Box mt={3}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleSubmitIdea}
            sx={{
              transition: '0.3s',
              '&:hover': {
                backgroundColor: '#b53f3f',
                transform: 'scale(1.05)',
              },
            }}
            disabled={loading}
          >
            {loading ? (
              <>
                Submitting...
                <CircularProgress
                  size={24}
                  sx={{ color: 'white', ml: 2 }}
                />
              </>
            ) : (
              'Submit Idea'
            )}
          </Button>
        </Box>
      </Box>
    </Fade>
  );
}

export default IdeaInput;
