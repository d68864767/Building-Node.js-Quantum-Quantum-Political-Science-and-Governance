// Importing required modules
const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// OpenAI API endpoint
const OPENAI_API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

// Function to process requests
const process = async (req, res) => {
    const prompt = req.body.prompt;
    const maxTokens = req.body.maxTokens || 100;

    try {
        const response = await axios.post(OPENAI_API_URL, {
            prompt,
            max_tokens: maxTokens
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error processing request' });
    }
};

module.exports = {
    process
};
