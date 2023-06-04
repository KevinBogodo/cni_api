const express = require('express');
const router = express.Router();
const auth = require('../app/Http/Middleware/auth/auth');

// Import controller

const welcomeController = require('../app/Http/Controllers/WelcomeController');
const syncController = require('../database/databaseSync');
// AuthController
const authLogin = require('../app/Http/Controllers/Auth/AuthController')
// Controller for crud
const pieceController = require('../app/Http/Controllers/Crud/PieceController');



/**************************************************************************
 * 
 *                     All the app route right here  
 * 
**************************************************************************/

/* Home route*/
router.get("/", welcomeController.get);
/* Db sync route */
router.get("/sync", syncController.sync);
router.get("/sync-f", syncController.syncForce);

/*** Auth route */
router.post("/api/auth/login", authLogin.login);
router.post("/api/auth/register", authLogin.register);
router.get("/api/auth/user", authLogin.user);
router.post("/api/auth/reset", authLogin.reset);

/********************************* Route pour crud ********************/

router.get("/api/pieces", auth, pieceController.get);
router.post("/api/add_piece", auth, pieceController.add);
router.put("/api/update_piece", auth, pieceController.update);

/**************************** fin de routepour crud ********************/





module.exports = router;