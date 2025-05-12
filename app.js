// app.js
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

//sample data for events page
const events = [
  {
    title: 'Tech Meetup',
    date: '2025-05-18',
    location: 'Stellenbosch Hub',
    image: 'meetup.png'
  },
  {
    title: 'Startup Pitch Night',
    date: '2025-05-24',
    location: 'Belgium Campus',
    image: 'pitch.png'
  }
];


app.get('/events', (req, res) => {
  res.render('events', { events });
});


// Start the server
const PORT = process.env.PORT;
if (!PORT) {
  throw new Error('PORT is not defined in the environment variables.');
}
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
