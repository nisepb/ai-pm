import React, { useContext } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Tooltip,
  Fade,
  Divider,
  Container,
} from '@mui/material';
import {
  Info,
  FitnessCenter,
  PersonPinCircle,
  HelpOutline,
  TrendingUp,
  List,
  Flag,
  Warning,
  Edit,
  ArrowForward,
} from '@mui/icons-material';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

function ExecutiveSummary() {
  const { executiveSummary, setStage } = useContext(AppContext);
  const navigate = useNavigate();
  console.log(executiveSummary);

  const isAuthenticated = false; // Replace with your actual authentication logic

  const handleEditIdea = () => {
    setStage('input');
    navigate('/input');
  };

  const handleMoveForward = () => {
    setStage('nextStage'); // Replace with the actual next stage
    navigate('/build'); // Adjust the route accordingly
  };

  const handleSignUp = () => {
    setStage('signup'); // Update stage
    navigate('/signup'); // Navigate to signup page
  };

  const sections = [
    {
      icon: (
        <FitnessCenter color="primary" fontSize="large" sx={{ mr: 1 }} />
      ),
      title: 'Industry',
      content: executiveSummary?.Industry || 'Industry not found',
    },
    {
      icon: (
        <PersonPinCircle color="primary" fontSize="large" sx={{ mr: 1 }} />
      ),
      title: 'Target Market',
      content: executiveSummary?.['Target Market'] || 'Target Market not found',
    },
    {
      icon: (
        <HelpOutline color="primary" fontSize="large" sx={{ mr: 1 }} />
      ),
      title: 'Problem Statement',
      content: executiveSummary?.['Problem Statement'] || 'Problem Statement not found',
    },
    {
      icon: (
        <TrendingUp color="primary" fontSize="large" sx={{ mr: 1 }} />
      ),
      title: 'Value Proposition',
      content: executiveSummary?.['Value Proposition'] || 'Value Proposition not found',
    },
    {
      icon: <List color="primary" fontSize="large" sx={{ mr: 1 }} />,
      title: 'Key Features',
      content: (
        <Box component="ul" sx={{ pl: 3, m: 0 }}>
          {executiveSummary?.['Key Features']?.map((feature, index) => (
            <Typography
              key={index}
              component="li"
              variant="body1"
              color="textPrimary"
              mb={1}
            >
              {feature}
            </Typography>
          )) || 'Key Features not found'}
        </Box>
      ),
    },
    {
      icon: <Flag color="primary" fontSize="large" sx={{ mr: 1 }} />,
      title: 'Competitive Analysis',
      content: executiveSummary?.['Competitive Analysis'] || 'Competitive Analysis not found',
    },
    {
      icon: <Warning color="primary" fontSize="large" sx={{ mr: 1 }} />,
      title: 'Potential Challenges',
      content: executiveSummary?.['Potential Challenges'] || 'Potential Challenges not found',
    },
    {
      icon: (
        <ArrowForward color="primary" fontSize="large" sx={{ mr: 1 }} />
      ),
      title: 'Next Suggested Steps',
      content: executiveSummary?.['Next Suggested Steps'] || 'Next Suggested Steps not found',
    },
  ];

  return (
    <Fade in={true} timeout={1000}>
      <Box
        component="section"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        mt={5}
        mb={5}
      >
        <Typography
          variant="h2"
          component="h1"
          fontWeight="800"
          mb={3}
          sx={{ fontSize: '2.5rem', letterSpacing: '0.5px' }}
        >
          Executive Summary
        </Typography>
        <Container maxWidth="md">
          <Card
            variant="outlined"
            sx={{
              mb: 4,
              boxShadow: 5,
              p: 4,
              width: '100%',
              borderRadius: '12px',
            }}
          >
            <CardContent>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={3}
                sx={{
                  background: 'linear-gradient(to right, #e0f7fa, #e1f5fe)',
                  borderRadius: '12px',
                  border: '1px solid #b3e5fc',
                  boxShadow: '0 6px 10px rgba(0, 0, 0, 0.12)',
                  textAlign: 'left',
                  width: '100%',
                  maxWidth: '600px',
                  margin: '0 auto',
                  mb: 5,
                  '@media (prefers-reduced-motion: no-preference)': {
                    animation: 'fadeIn 1s ease-in-out',
                  },
                }}
              >
                <Box display="flex" alignItems="center" mb={3}>
                  <Info color="primary" fontSize="large" sx={{ mr: 2 }} />
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    sx={{ fontSize: '1rem', lineHeight: 1.75 }}
                  >
                    This section provides an <b>overview</b> of your idea,
                    covering key aspects such as the industry, target market, and
                    value proposition. Up next, our AI agent will help you create
                    financial estimates, a detailed action plan, and all the
                    necessary steps to bring your idea to life.
                  </Typography>
                </Box>
              </Box>

              {sections.map((section, idx) => (
                <Box key={idx} component="section" mb={4}>
                  <Box
                    display="flex"
                    alignItems="center"
                    mb={2}
                    sx={{ textAlign: 'left' }}
                  >
                    {section.icon}
                    <Typography
                      variant="h5"
                      component="h2"
                      fontWeight="700"
                      sx={{ fontSize: '1.2rem' }}
                    >
                      {section.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    sx={{ textAlign: 'left', lineHeight: 1.6 }}
                  >
                    {section.content}
                  </Typography>
                  {idx !== sections.length - 1 && (
                    <Divider sx={{ my: 4 }} />
                  )}
                </Box>
              ))}

              {/* Buttons with Improved Visual Distinction */}
              <Box
  mt={4} // Add margin-top to move the buttons down a bit
  display="flex"
  justifyContent="center"
  gap={3} // Add spacing between buttons
>
  <Tooltip title="Edit your idea and make changes">
    <Button
      variant="contained"
      color="primary"
      startIcon={<Edit />}
      onClick={handleEditIdea}
      sx={{
        flex: 1, // Ensure the button takes up available space
        fontSize: '1rem',
        padding: '10px 20px',
        transition: '0.3s',
        '&:hover': {
          backgroundColor: '#004ba0',
          transform: 'scale(1.05)',
        },
        '&:focus': {
          outline: '2px solid #004ba0',
        },
      }}
    >
      Edit Idea
    </Button>
  </Tooltip>

  <Tooltip title="Proceed to create a detailed plan">
    <Button
      variant="contained"
      startIcon={<ArrowForward />}
      onClick={handleMoveForward}
      sx={{
        flex: 1, // Ensure the button takes up available space
        fontSize: '1rem',
        padding: '10px 20px',
        backgroundColor: '#4caf50', // Green for positive action
        color: 'white',
        transition: '0.3s',
        '&:hover': {
          backgroundColor: '#388e3c',
          transform: 'scale(1.05)',
        },
        '&:focus': {
          outline: '2px solid #4caf50',
        },
      }}
    >
      Move Forward with Plan
    </Button>
  </Tooltip>
</Box>

            </CardContent>
          </Card>
        </Container>
      </Box>
    </Fade>
  );
}

export default ExecutiveSummary;
