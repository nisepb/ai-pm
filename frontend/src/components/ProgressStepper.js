// src/components/ProgressStepper.js

import React, { useContext } from 'react';
import { Stepper, Step, StepLabel, Box } from '@mui/material';
import { AppContext } from '../context/AppContext';

function ProgressStepper() {
  const { stage } = useContext(AppContext);

  const steps = ['Enter Idea', 'Generate Summary', 'Review Summary'];

  const getActiveStep = () => {
    switch (stage) {
      case 'input':
        return 0;
      case 'loading':
        return 1;
      case 'summary':
        return 2;
      default:
        return -1; // Hide stepper on landing or unrelated stages
    }
  };

  const activeStep = getActiveStep();

  return activeStep >= 0 ? (
    <Box sx={{ width: '100%', mt: 2 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  ) : null;
}

export default ProgressStepper;
