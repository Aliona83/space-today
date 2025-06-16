const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/api/apod', async (req, res) => {
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

