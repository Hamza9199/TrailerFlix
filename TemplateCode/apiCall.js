const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

const TMDB_API_KEY = 'your_tmdb_api_key';

app.get('/api/trailers/:movieId', async (req, res) => {
    const { movieId } = req.params;
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${TMDB_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching trailers');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
