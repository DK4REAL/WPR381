Web Portal Project

Description

The Web Portal Project is a simple web application that dynamically displays upcoming events. It includes multiple pages such as Home, About, Events, and Contact. The Events Page shows a list of events with details like title, date, location, and images.

This project is built using Node.js, Express, and EJS for dynamic content rendering, with CSS for styling. The portal has a minimalist design and is mobile-friendly.

Features

Home Page: A welcome message and a placeholder for upcoming events.

About Page: Information about the organization/team.

Events Page: Displays a list of upcoming events, dynamically rendered.

Contact Page: A simple form for users to contact the team.

Installation

Prerequisites

Make sure you have Node.js installed on your machine. You can download it from nodejs.org.

Steps to Install

Clone the repository:

Bash
git clone https://github.com/yourusername/Web-Portal.git
Navigate to the project directory:

bash
cd Web-Portal
Install dependencies:

bash
npm install
Start the server:

bash
npx nodemon app.js
Open your browser and go to:

http://localhost:3000
File Structure

/Web-Portal
├── /public
│   ├── /images       # Image assets for events
│   └── /css          # Stylesheet
├── /views            # EJS templates for pages
│   ├── about.ejs
│   ├── events.ejs
│   ├── home.ejs
│   └── contact.ejs
├── /routes
│   └── pageRoutes.js # Route handling for pages
├── /node_modules     # Installed dependencies
├── app.js            # Main entry point of the server
├── package.json      # Project metadata and dependencies
└── README.md         # This file
