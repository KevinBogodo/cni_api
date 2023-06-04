const express = require('express');
const router = express.Router();
const auth = require('../app/Http/Middleware/auth/auth')

// Import controller

const welcomeController = require('../app/Http/Controllers/WelcomeController')
const syncController = require('../database/databaseSync')



// Route use
router.get("/", welcomeController.get)
router.get("/sync", syncController.sync)



module.exports = router;