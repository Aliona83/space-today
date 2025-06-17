const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

// GET /api/apod?date=YYYY-MM-DD
router.get('/', async (req, res) => {
  const { date } = req.query;
  const apiKey = process.env.NASA_API_KEY;

  let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  if (date) {
    apiUrl += `&date=${date}`;
  }

  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error('APOD fetch failed:', error.message);
    res.status(500).json({ error: 'Failed to fetch APOD data' });
  }
});

module.exports = router;
