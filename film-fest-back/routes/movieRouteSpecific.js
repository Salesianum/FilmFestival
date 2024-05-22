const express = require('express');
const router = express.Router();
const Movie = require('../schemas/movie');

router.get('/movie', async(req, res) => {
    try {
        const movs = await Movie.find({"title": `${req.body.title}`});
        res.send(movs);
    } catch (error) {
        res.status(400).json("Error " + error)
    }
})

module.exports = router;