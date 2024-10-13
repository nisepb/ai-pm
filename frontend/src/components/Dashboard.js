// src/components/Dashboard.js

import React from 'react';
import {
  Box,
  Typography,
  Button,
  Tooltip,
  Card,
  CardContent,
} from '@mui/material';
import {
  Description,
  Edit,
  CalendarToday,
  Map,
  People,
  TrendingUp,
  PriceChange,
  Groups3,
  AppShortcut,
  CoPresent,
  AdsClick,
  Download,
  Delete,
} from '@mui/icons-material';

function Dashboard() {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h3" fontWeight="900" mb={4}>
        Welcome to Your Dashboard
      </Typography>
      <Typography variant="h6" fontWeight="500" mb={4}>
        Manage your project files and explore upcoming features.
      </Typography>

      {/* Main Dashboard Buttons */}
      <Box mt={3} mb={6} display="flex" flexDirection="column" alignItems="center" gap={2}>
        {/* Top row of buttons */}
        <Box display="flex" gap={2}>
          <Tooltip title="View or Download Executive Summary">
            <Button
              variant="contained"
              color="primary"
              startIcon={<Description />}
              sx={{ backgroundColor: '#f44336', '&:hover': { backgroundColor: '#d32f2f' } }}
            >
              View/Download Executive Summary
            </Button>
          </Tooltip>
          <Tooltip title="Refine Your Idea">
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<Edit />}
            >
              Refine Your Idea
            </Button>
          </Tooltip>
        </Box>

        {/* Planning Tools Section */}
        <Box mt={3} mb={6}>
          <Box mb={4}>
            <Typography variant="h6" fontWeight="700" gutterBottom>
              Planning Tools
            </Typography>
            <Box display="flex" gap={2}>
              <Tooltip title="Generate Gantt Chart">
                <Button variant="outlined" startIcon={<CalendarToday />} disabled>
                  Generate Gantt Chart
                </Button>
              </Tooltip>
              <Tooltip title="Create Roadmap">
                <Button variant="outlined" startIcon={<Map />} disabled>
                  Create Roadmap
                </Button>
              </Tooltip>
              <Tooltip title="Perform Market Research">
                <Button variant="outlined" startIcon={<People />} disabled>
                  Perform Market Research
                </Button>
              </Tooltip>
            </Box>
          </Box>

          {/* Financial Tools Section */}
          <Box mb={4}>
            <Typography variant="h6" fontWeight="700" gutterBottom>
              Financial Tools
            </Typography>
            <Box display="flex" gap={2}>
              <Tooltip title="Simulate Financials">
                <Button variant="outlined" startIcon={<TrendingUp />} disabled>
                  Simulate Financials
                </Button>
              </Tooltip>
              <Tooltip title="Estimate Product Costs">
                <Button variant="outlined" startIcon={<PriceChange />} disabled>
                  Estimate Product Costs
                </Button>
              </Tooltip>
              <Tooltip title="Estimate Team & Resources">
                <Button variant="outlined" startIcon={<Groups3 />} disabled>
                  Estimate Team & Resources
                </Button>
              </Tooltip>
            </Box>
          </Box>

          {/* Pitch & Presentation Section */}
          <Box mb={4}>
            <Typography variant="h6" fontWeight="700" gutterBottom>
              Pitch & Presentation
            </Typography>
            <Box display="flex" gap={2}>
              <Tooltip title="Generate Prototype">
                <Button variant="outlined" startIcon={<AppShortcut />} disabled>
                  Generate Prototype
                </Button>
              </Tooltip>
              <Tooltip title="Generate Pitch Deck">
                <Button variant="outlined" startIcon={<CoPresent />} disabled>
                  Generate Pitch Deck
                </Button>
              </Tooltip>
              <Tooltip title="Develop Marketing Plan">
                <Button variant="outlined" startIcon={<AdsClick />} disabled>
                  Develop Marketing Plan
                </Button>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Recent Projects Section */}
      <Box mt={5} width="80%" mx="auto">
        <Typography variant="h5" fontWeight="700" mb={3}>
          Recent Projects
        </Typography>

        {/* Example Project Cards */}
        <Box display="flex" justifyContent="center" flexWrap="wrap" gap={3}>
          {/* Project Card */}
          <Card sx={{ width: '300px', boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="700">
                Fitness App Project
              </Typography>
              <Typography variant="body2" color="textSecondary" mb={2}>
                Last edited: Oct 10, 2024
              </Typography>
              <Box display="flex" justifyContent="space-between">
                <Button size="small" startIcon={<Download />} color="primary">
                  Download
                </Button>
                <Button size="small" startIcon={<Edit />} color="secondary">
                  Edit
                </Button>
                <Button size="small" startIcon={<Delete />} color="error">
                  Delete
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* Another Project Card */}
          <Card sx={{ width: '300px', boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="700">
                Budget Planning App
              </Typography>
              <Typography variant="body2" color="textSecondary" mb={2}>
                Last edited: Oct 5, 2024
              </Typography>
              <Box display="flex" justifyContent="space-between">
                <Button size="small" startIcon={<Download />} color="primary">
                  Download
                </Button>
                <Button size="small" startIcon={<Edit />} color="secondary">
                  Edit
                </Button>
                <Button size="small" startIcon={<Delete />} color="error">
                  Delete
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
