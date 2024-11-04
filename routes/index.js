// Importing the Express framework
const express = require('express');
// Creating a new router object from the Express framework
const router = express.Router();

// Defining a route for the root URL ("/")
// When a GET request is made to this URL, it will render the 'home' view
router.get('/', (req, res) => {
  res.render('home');
});

// Defining a route for the "/about" URL
// When a GET request is made to this URL, it will render the 'about' view
router.get('/about', (req, res) => {
  res.render('about');
});

// Defining a route for the "/projects" URL
// When a GET request is made to this URL, it will render the 'projects' view
router.get('/projects', (req, res) => {
  res.render('projects');
});

// Defining a route for the "/contact" URL
// When a GET request is made to this URL, it will render the 'contact' view
router.get('/contact', (req, res) => {
  res.render('contact');
});

// Exporting the router so it can be used in other parts of the application
module.exports = router;

