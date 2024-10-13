// src/components/CallToAction.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

function CallToAction() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/input');
  };

  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h4" fontWeight="700" mb={2}>
        Ready to Bring Your Idea to Life?
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={4}>
        Enter your business idea and let our AI-powered project manager help you turn it into reality.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleClick}
      >
        Get Started
      </Button>
    </Box>
  );
}

export default CallToAction;
