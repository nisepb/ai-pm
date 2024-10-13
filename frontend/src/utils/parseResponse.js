// src/utils/parseResponse.js

export const parseJSONResponse = (data) => {
  try {
    // Remove any non-JSON text before or after the JSON object
    const jsonString = data.match(/{[\s\S]*}/)[0];
    return JSON.parse(jsonString);
  } catch (error) {
    throw new Error('Invalid JSON response');
  }
};
