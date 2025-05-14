const express = require('express');
const router = express.Router();
const { sendEmail } = require('../utils/mailer');

// Import data
const events = require('../data/events');
const teamMembers = require('../data/about');

// Home Page
router.get('/', (req, res) => {
  res.render('pages/home', {
    title: 'Home',
    events
  });
});

// Events Page
router.get('/events', (req, res) => {
  res.render('pages/events', {
    title: 'Events',
    events
  });
});

// Contact Page (GET)
const contactMessages = [];
router.get('/contact', (req, res) => {
  res.render('pages/contact', {
    title: 'Contact'
  });
});

// Contact Page (POST - Form Submission)
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Store the form submission in memory for the current session
  contactMessages.push({ name, email, message, date: new Date() });

  // Attempt to send a confirmation email to the user
  sendEmail(name, email, message)
    .then(info => {
      console.log('Email sent:', info.response);

      // Render a thank you page after successful email delivery
      res.render('pages/thankyou', {
        title: 'Thank You',
        name
      });
    })
    .catch(error => {
      console.error('Error sending email:', error);

      // Handle errors gracefully
      res.status(500).send('Something went wrong, please try again later.');
    });
});

// About Page
router.get('/about', (req, res) => {
  res.render('pages/about', {
    title: 'About',
    teamMembers
  });
});

module.exports = router;
