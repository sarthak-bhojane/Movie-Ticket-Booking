// const express = require('express');
// const router = express.Router();
// const { getMovies } = require('../controllers/movieController');

// router.get('/', getMovies);

// module.exports = router;



const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// GET all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
