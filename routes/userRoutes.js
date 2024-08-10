const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Import the post controller


// Get All User Data
router.get('/', userController.getAllUsers);


module.exports = router;