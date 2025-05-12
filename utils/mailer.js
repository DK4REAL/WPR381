require('dotenv').config(); // Load environment variables from .env file

const nodemailer = require('nodemailer');

// Set up Nodemailer Transporter dynamically based on environment variables
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE, // Use the EMAIL_SERVICE environment variable for the email service (e.g., Gmail, Outlook)
  auth: {
    user: process.env.EMAIL_USER, // Use the EMAIL_USER environment variable for the email
    pass: process.env.EMAIL_PASS  // Use the EMAIL_PASS environment variable for the password
  },
  port: process.env.EMAIL_PORT, // Use the EMAIL_PORT from .env for the correct port
  secure: process.env.EMAIL_PORT == 465 // Set secure to true for port 465 (common for SSL/TLS)
});

// Function to send the email
const sendEmail = (name, email, message) => {
  const mailOptions = {
    from: `"WPR381 Project" <${process.env.EMAIL_USER}>`, // Use the email from environment variable
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
