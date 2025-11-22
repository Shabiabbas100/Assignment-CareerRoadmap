const express = require('express');
const cors = require('cors');
const config = require('./src/config'); // .env variables handled here ❤️
const careerRoutes = require('./src/routes/careerRoutes');

const app = express();

// Middleware
app.use(cors());        // Frontend se connect karne ke liye
app.use(express.json()); // JSON data padhne ke liye

// Routes setup
app.use('/api', careerRoutes);

// Simple Route check karne ke liye ki server chal raha hai
app.get('/', (req, res) => {
    res.send('Backend server is running!');
});

// Server Start
app.listen(config.PORT, () => {
    console.log(`Server is running on http://localhost:${config.PORT}`);
});