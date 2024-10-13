import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleBuildIdeaClick = () => {
    navigate('/input');
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="80vh"  // Ensure the content takes up at least 80% of the viewport
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
        Turn Your Idea Into Reality
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, fontSize: '1.25rem', textAlign: 'center', maxWidth: '600px' }}>
        Take your idea to the next level. Our AI agent creates a plan for you, estimates costs, and provides everything you need to get your idea off the ground.
      </Typography>
      <Button
        variant="contained"
        color="warning"
        size="large"
        onClick={handleBuildIdeaClick}
        sx={{
          px: 5,
          py: 2,
          fontSize: '1.25rem',
          backgroundColor: '#ff9800',  // Use orange color for the button
          '&:hover': {
            backgroundColor: '#e68900',  // Darker shade of orange on hover
          },
        }}
      >
        BUILD YOUR IDEA
      </Button>
    </Box>
  );
}

export default LandingPage;
