// src/components/BuildPrototype.js

import React from 'react';
import { Box, Typography } from '@mui/material';
import AuthForm from './AuthForm';

function BuildPrototype() {
  return (
    <Box
      textAlign="center"
      mt={5}
      sx={{ maxWidth: '600px', mx: 'auto' }}
    >
      <Typography variant="h4" mb={3} fontWeight="700">
        Build Your Prototype
      </Typography>
      <Typography variant="body1" mb={4} color="textSecondary">
        To proceed, please sign up or log in to access our premium features and take the next step in bringing your idea to life.
      </Typography>
      <AuthForm />
    </Box>
  );
}

export default BuildPrototype;
