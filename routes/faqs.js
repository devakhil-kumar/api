const express = require('express');
const router = express.Router();
const { getFaqs } = require('../controllers/faqController');

// Define your routes here
router.get('/', getFaqs);

module.exports = router;
