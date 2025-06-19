const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const apodRoute = require('./routes/apod');
const neowsRoute = require('./routes/neows');

const app = express();

// ✅ Allow both local dev and Vercel frontend
const allowedOrigins = [
  'http://localhost:3000',
  'https://space-today.vercel.app',
];

app.use(cors({
  origin: [
    'https://space-today.vercel.app',
    'https://space-today-git-main-alionas-projects-a602d264.vercel.app'
  ]
}));

app.use(express.json());

// Routes
app.use('/api/apod', apodRoute);
app.use('/api/asteroids', neowsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
