
const sequelize = require('./connexion');

// Declaration of all models
require('../app/Models/Users/User');
require('../app/Models/Users/TypeUser');
require('../app/Models/Pieces/Piece');
require('../app/Models/Pieces/PieceType')

// Function to sync with database
const sync= (req, res) => {
    return sequelize.sync({ force: true }).then(_ => {
        res.send("Sync succesfully")
    })
    .catch(error => {
        const message = 'error in database sync, Try again later.'
        res.status(500).json({message, data: error})
    })
 
 }

module.exports =  { sync }