const express = require('express');
const router = express.Router();
const { getTestimonials } = require('../controllers/testimonialsController');

// Define your routes here
router.get('/', getTestimonials);

module.exports = router;
