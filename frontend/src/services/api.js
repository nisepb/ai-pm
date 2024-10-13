// src/services/api.js

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5001/api', // Adjust as needed
  timeout: 30000,
});

export const submitIdea = (prompt) =>
  apiClient.post('/chatgpt', { prompt });
