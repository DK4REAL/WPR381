require('dotenv').config(); // Load environment variables from .env file
const nodemailer = require('nodemailer');

// Set up Nodemailer Transporter dynamically based on environment variables
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE, // Use the EMAIL_SERVICE environment variable for the email service (e.g., Gmail)
  auth: {
    user: process.env.EMAIL_USER, // Use the EMAIL_USER environment variable for the email
    pass: process.env.EMAIL_PASS  // Use the EMAIL_PASS environment variable for the password
  }
});

// Function to send the email
const sendEmail = (name, email, message) => {
  const mailOptions = {
    from: `"WPR381 Project" <${process.env.EMAIL_USER}>`, // Use the email from environment variable
    to: email, // The email provided by the user
    subject: `Hello ${name}, Thanks for Reaching Out!`, // The subject line of the email
    text: `Hi ${name},\n\nThank you for reaching out to us! We’ve received your message and one of our team members will review it shortly.\n\nHere’s a copy of what you sent:\n"${message}"\n\nIf any further details are needed, we’ll be in touch.\n\nBest regards,\nWPR381 V-AM No. 5 Group`
    //  ↑ email message
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
