const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the folder where EJS views are stored
app.set('views', path.join(__dirname, 'views'));

// Static folder (for CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
  const events = [
    { title: "Event 1", date: "2025-05-10", location: "Location 1" },
    { title: "Event 2", date: "2025-06-15", location: "Location 2" },
  ];
  res.render('home', { events });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});