// src/theme/theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0288d1', // Ensure this matches the desired color
    },
    secondary: {
      main: '#FF9800', // Orange color for buttons
    },
    background: {
      default: '#f0f4ff',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
