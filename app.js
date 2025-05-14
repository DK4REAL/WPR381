require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Use page routes
const pageRoutes = require('./routes/pageRoutes');
app.use('/', pageRoutes);

// Start the server
const PORT = process.env.PORT;
if (!PORT) {
  throw new Error('PORT is not defined in the environment variables.');
}

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});