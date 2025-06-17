// Import modules
const express = require('express');
const router = express.Router(); 
const axios = require('axios');  

// Load NASA API key from env
const NASA_API_KEY = process.env.NASA_API_KEY;

// This route fetches asteroid data from NASA's
router.get('/', async (req, res) => {
  const { date } = req.query; 

  try {
    // Make a GET request to NASA's 
    const response = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${NASA_API_KEY}`
    );

   // returns list of asteroid by date
    const asteroids = response.data.near_earth_objects[date];

    res.json(asteroids);
  } catch (err) {
   
    console.error('Error fetching asteroids:', err.message);
    res.status(500).json({ error: 'Failed to fetch asteroid data' });
  }
});


module.exports = router;
