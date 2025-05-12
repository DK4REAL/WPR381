const express = require('express');
const router = express.Router();
const { sendEmail } = require('../utils/mailer');
const events = require('../data/events'); // 👈 import from new file

// Home
router.get('/', (req, res) => {
  res.render('pages/home', { title: 'Home', events });
});

// Events
router.get('/events', (req, res) => {
  res.render('pages/events', { title: 'Events', events });
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
