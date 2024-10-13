// src/components/Header.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import ProgressBar from './ProgressStepper'; // Import the ProgressBar component

function Header() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar sx={{ minHeight: 80 }}>
        <Box
          component="img"
          src={Logo}
          alt="Logo"
          sx={{ height: 50, cursor: 'pointer' }}
          onClick={handleHomeClick}
        />
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, ml: 2, cursor: 'pointer', fontWeight: 'bold' }}
          onClick={handleHomeClick}
        >
          AI Project Manager
        </Typography>
        <Button color="inherit" sx={{ fontSize: '1.1rem', mx: 1 }} onClick={handleHomeClick}>
          Home
        </Button>
        <Button color="inherit" sx={{ fontSize: '1.1rem', mx: 1 }}>
          Pricing
        </Button>
        <Button color="inherit" sx={{ fontSize: '1.1rem', mx: 1 }}>
          Sign Up
        </Button>
        <Button color="inherit" sx={{ fontSize: '1.1rem', mx: 1 }}>
          Contact Us
        </Button>
      </Toolbar>

      {/* Include the Progress Bar
      <ProgressBar /> */}
    </AppBar>
  );
}

export default Header;
