// routes/pageRoutes.js
const express = require('express');
const router = express.Router();
const { sendEmail } = require('../utils/mailer'); // Import the sendEmail function

// Mock event data (you can replace this with real DB data later)
const events = [
  {
    title: 'Launch Party',
    date: '2025-06-01',
    location: 'Cape Town'
  },
  {
    title: 'Tech Talk Tuesday',
    date: '2025-06-10',
    location: 'Online'
  }
];

// Home Page
router.get('/', (req, res) => {
  res.render('pages/home', {
    title: 'Home',
    events
  });
});

// Contact Page (GET)
router.get('/contact', (req, res) => {
  res.render('pages/contact', { title: 'Contact' });
});

// Contact Page (POST - form submission)
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Form submitted:', { name, email, message });

  // Send email to the admin or the team
  sendEmail(name, email, message)
    .then(info => {
      console.log('Email sent: ' + info.response);
      
      // After sending the email, render the Thank You page with the name
      res.render('pages/thankyou', { title: 'Thank You', name });
    })
    .catch(error => {
      console.log('Error sending email:', error);
      res.status(500).send('Something went wrong, please try again later.');
    });
});

// About Page (GET)
router.get('/about', (req, res) => {
  res.render('pages/about', { title: 'About' });
});

module.exports = router;
