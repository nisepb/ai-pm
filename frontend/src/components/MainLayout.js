// src/components/MainLayout.js

import React from 'react';
import { Box } from '@mui/material';

function MainLayout({ children }) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        color: '#ffffff',
      }}
    >
      {children}
    </Box>
  );
}

export default MainLayout;
