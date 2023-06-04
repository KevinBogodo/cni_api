
const sequelize = require('./connexion');

// Declaration of all models
require('../app/Models/Users/User');
require('../app/Models/Pieces/Piece');
const TypeUser = require('../app/Models/Users/TypeUser');
const PieceType = require('../app/Models/Pieces/PieceType');

// Take data for type
datatypeUser = require('./factory/datatypeUser')
datatypePiece = require('./factory/datatypePiece')

// Function to sync with database
const sync= (req, res) => {
    // return sequelize.sync({ force: true }).then(_ => {
    return sequelize.sync({ alter: true }).then(_ => {
        res.send("Sync succesfully")
    })
    .catch(error => {
        const message = 'error in database sync, Try again later.'
        res.status(500).json({message, data: error})
    })
}

// Function to force sync with database (include drop all table and recreate)
const syncForce= (req, res) => {
    // return sequelize.sync({ force: true }).then(_ => {
    return sequelize.sync({ force: true }).then(_ => {
        // Init data type
        datatypeUser.map(datatypeU => {
            TypeUser.create({
                name:datatypeU.name,
                description: datatypeU.description,
            }).then(datatypeU => console.log(datatypeU.toJSON()))
        })

        datatypePiece.map(datatypeP => {
            PieceType.create({
                name:datatypeP.name,
                description: datatypeP.description,
            }).then(datatypeP => console.log(datatypeP.toJSON()))
        })
        res.send("Sync succesfully")
    })
    .catch(error => {
        const message = 'error in database sync, Try again later.'
        res.status(500).json({message, data: error})
    })
 
}

module.exports =  { sync, syncForce }