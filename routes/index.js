const express = require('express');
const router = express.Router();
const auth = require('../app/Http/Middleware/auth/auth')

// Import controller
const welcomeController = require('../app/Http/Controllers/WelcomeController')

// Route use
router.get("/", welcomeController.get)


module.exports = router;