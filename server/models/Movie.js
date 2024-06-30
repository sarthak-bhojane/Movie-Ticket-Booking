// const mongoose = require('mongoose');

// const MovieSchema = new mongoose.Schema({
//   title: String,
//   genre: String,
//   showtimes: [String],
//   image: String,
// });

// module.exports = mongoose.model('Movie', MovieSchema);




const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  showtimes: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model('Movie', MovieSchema);
