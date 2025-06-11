

const express = require('express');
const cors = require('cors');
const cron = require('node-cron');
const fetchNews = require('./server/jobs/fetchNews');
const articleRoutes = require('./server/routes/articles');
const connectDB = require('./server/config/db')
require("dotenv").config();

const app = express();
const PORT = process.env.PORT


// Middleware
app.use(express.json());
app.use(cors()); // Use the cors middleware with options

//connect to database
connectDB();

// Routes
app.use('/api/articles', articleRoutes);

// Schedule news fetching every 30 minutes
cron.schedule('*/30 * * * *', () => {
  console.log('Running scheduled news fetch...');
  fetchNews();
});

// Initial fetch on startup
fetchNews();

app.listen(PORT, () => {
  // console.log(`App is running on http://localhost:${PORT}`);
});

module.exports = app;