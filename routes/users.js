const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/userController'); // Import the controller

// @route   GET /users
// @desc    Get all users
// @access  Public
router.get('/', getUsers);

module.exports = router;
