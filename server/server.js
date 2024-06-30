



// ---------------------
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const connectDB = require('./config/db'); // Ensure this path is correct
// const app = express();

// // Connect to database
// connectDB();

// // Middleware
// app.use(bodyParser.json());

// // Routes
// app.post('/api/register', (req, res) => {
//   const { name, email, password } = req.body;
//   // Registration logic here...
//   res.send('User registered successfully');
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));












// // server.js

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const path = require('path');
// // const connectDB = require('./connectDB');
// const connectDB = require('./config/db');

// // Initialize express app
// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// connectDB();

// // API routes
// app.use('/api/register', require('./routes/register'));
// app.use('/api/login', require('./routes/login'));
// app.use('/api/movies', require('./routes/movies'));

// // Serve static assets if in production
// if (process.env.NODE_ENV === 'production') {
//   // Set static folder
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));












const express = require('express');
const connectDB = require('./config/db');
const moviesRoutes = require('./routes/movies');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/movies', moviesRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
