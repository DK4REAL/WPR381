const express = require("express");
const router = express.Router();
const dataManager = require("../utils/dataManager");

// Home Page
router.get("/", (req, res) => {
  res.render("pages/home");
});

// Contact Page
router.get("/contact", (req, res) => {
  res.render("pages/contact");
});

router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  dataManager.saveContact({ name, email, message });
  res.redirect("/thankyou");
});

// Events Page
router.get("/events", (req, res) => {
  res.render("pages/events");
});

router.post("/events", (req, res) => {
  const { name, email, eventName } = req.body;

  dataManager.addEventRegistration({
    name,
    email,
    eventName,
    time: new Date(),
  });

  res.redirect("/thankyou");
});

// Thank You Page
router.get("/thankyou", (req, res) => {
  res.render("pages/thankyou");
});

module.exports = router;
