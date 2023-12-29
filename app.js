// Importing required modules
const express = require('express');
const dotenv = require('dotenv');
const quantum = require('./quantum');
const politicalScience = require('./politicalScience');
const openai = require('./openai');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Quantum Political Science and Governance API');
});

app.post('/quantum', quantum.process);
app.post('/politicalScience', politicalScience.process);
app.post('/openai', openai.process);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
