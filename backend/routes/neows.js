const express = require('express');
const router = express.Router();
const axios = require('axios');

const NASA_API_KEY = process.env.NASA_API_KEY;

router.get('/', async (req, res) => {
  const { date } = req.query;

  if (!date) {
    return res.status(400).json({ error: 'Missing required date parameter' });
  }

  try {
    const response = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${NASA_API_KEY}`
    );

    const asteroids = response.data.near_earth_objects[date];

    // Handle case when API doesn't return asteroids
    if (!asteroids || !Array.isArray(asteroids)) {
      return res.status(404).json({ error: 'No asteroid data found for that date' });
    }

    res.json(asteroids);
  } catch (err) {
    console.error('Error fetching asteroids:', err.message);
    res.status(500).json({ error: 'Failed to fetch asteroid data' });
  }
});

module.exports = router;
