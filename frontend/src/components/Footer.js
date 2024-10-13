// src/components/Footer.js

import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        textAlign: 'center',
        backgroundColor: 'primary.main',
        color: 'white',
        mt: 'auto',
      }}
    >
      <Typography variant="body1" sx={{ mb: 2 }}>
        © {new Date().getFullYear()} AI Project Manager. All rights reserved.
      </Typography>
      <Box>
        <IconButton color="inherit" href="https://facebook.com">
          <Facebook />
        </IconButton>
        <IconButton color="inherit" href="https://twitter.com">
          <Twitter />
        </IconButton>
        <IconButton color="inherit" href="https://linkedin.com">
          <LinkedIn />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;
