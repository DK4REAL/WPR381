// utils/mailer.js
require('dotenv').config(); // Load environment variables from .env file

const nodemailer = require('nodemailer');

// Set up Nodemailer Transporter for Outlook
const transporter = nodemailer.createTransport({
  service: 'Outlook', // Use Outlook service
  auth: {
    user: process.env.EMAIL_USER, // Use the EMAIL_USER environment variable for the email
    pass: process.env.EMAIL_PASS  // Use the EMAIL_PASS environment variable for the password
  }
});

// Function to send the email
const sendEmail = (name, email, message) => {
  const mailOptions = {
    from: '"WPR381 Project" <' + process.env.EMAIL_USER + '>', // Use the email from environment variable
    to: email, // The email provided by the user
    subject: `Hello ${name}, Thanks for Reaching Out!`, // The subject line of the email
    text: `Hey ${name},\n\nPlease give us a good mark!\n\nYour message: "${message}"\n\nBest regards,\nWPR381 V-AM No. 5 Group` // The email content
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error); // Reject if there’s an error
      } else {
        resolve(info); // Resolve if the email is sent successfully
      }
    });
  });
};

module.exports = { sendEmail };
