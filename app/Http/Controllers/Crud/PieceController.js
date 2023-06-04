const Pieces = require('../../../Models/Pieces/Piece');
const PieceType = require('../../../Models/Pieces/PieceType');
const User = require('../../../Models/Users/User');
const { ValidationError, UniqueConstraintError, Op } = require('sequelize');


module.exports = {

    // Function to add pieces
    add : (req, res) => {
   
        Pieces.create({ 
            number: req.body.number,
            Pname: req.body.Pname,
            Psurname: req.body.Psurname,
            Ppicture: req.body.Ppicture,
            Ppicture2: req.body.Ppicture2,
            Pphone: req.body.p_phone,
            typeId: req.body.typeId,
            city: req.body.city,
            street: req.body.street,
            status: req.body.status,
            Fphone: req.body.Fphone,
            Fphone2: req.body.Fphone2,
            UserId: req.body.UserId,
            withdrawal_at: req.body.withdrawal_at
        })
        .then(user => {
            const message = 'user created';
            return res.json({message, data: user});
        })
        .catch(error => {
            if(error instanceof ValidationError) {
                return res.status(400).json({message: error.message, data: error})
            }
            if(error instanceof UniqueConstraintError) {
                return res.status(400).json({ message: error.message, data: error })
            }

            const message = 'user can\'t be create , Try again in a moment.'
            return res.status(500).json({message, data: error})
        })
    },

    // Function to get pieces event with search
    get : (req, res) => {
        if (req.query.search) {
            const search = req.query.search;
            const limit = parseInt(req.query.limit) || 6

            if (search.length < 3) {
                const message = 'To perform search you must provide more than two character';
                return res.status(400).json({message});
            }

            // If no error and length > 2

            return Pieces.findAndCountAll({ 
                where: {
                    [Op.or]:[
                        {
                            number: { // 'number' is a model property
                                [Op.like]: `%${search}%` //'name' is a search criteria
                            }
                        },
                        {
                            Pname: { // 'name' is a model property
                                [Op.like]: `%${search}%` //'name' is a search criteria
                            }
                        },
                        {
                            Psurname: { // 'surname' is a model property
                                [Op.like]: `%${search}%` //'name' is a search criteria
                            },
                        }
                    ]
                },
                include: [PieceType, User],
                order: ['id'],
                limit: limit
                
            })
            .then(({count, rows}) => {
                const message = `Is there ${count} pieces match with ${search}.`;
                res.json({ message, data: rows })
            })

        }else{
            Pieces.findAll({ include: [PieceType, User], where: {withdrawalAt: { [Op.is]: null } }, order: ['id'] })
            .then(pieces => {
                const message = 'The lists of pieces was successfully loaded'
                res.json({ message, data: pieces})
            })
            .catch(error => {
                const message = 'pieces list could not be retrieved, Try again in a moment.'
                res.status(500).json({message, data: error})
            })
        }
        
    },

    //Function to update status / user / widthdraw or All
    update : (req, res) => {

        if (req.query.id) {
            
            if (req.query.status) {
                Pieces.findByPk(req.query.id)
                    .then(piece => {
                        // Check if record exists in db
                        if (piece) {
                            piece.update({
                                status: req.query.status
                            })
                            .then(piece =>{
                                const message = 'Succesfully update';
                                return res.json({message, data: piece});
                            })
                            .catch(error => {
                                const message = 'Error on update, try again later';
                                return res.status(500).json({message, data: error});
                            })
                        }
                    })                
            }else if (req.query.user) {
                Pieces.findByPk(req.query.id)
                .then(piece => {
                    // Check if record exists in db
                    if (piece) {
                        piece.update({
                            UserId: req.query.user
                        })
                        .then(piece =>{
                            const message = 'Succesfully update';
                            return res.json({message, data: piece});
                        })
                        .catch(error => {
                            const message = 'Error on update, try again later';
                            return res.status(500).json({message, data: error});
                        })
                    }
                })
            } else if (req.query.widthdraw) {
                Pieces.findByPk(req.query.id)
                .then(piece => {
                    // Check if record exists in db
                    if (piece) {
                        piece.update({
                            withdrawalAt: req.query.widthdraw
                        })
                        .then(piece =>{
                            const message = 'Succesfully update';
                            return res.json({message, data: piece});
                        })
                        .catch(error => {
                            const message = 'Error on update, try again later';
                            return res.status(500).json({message, data: error});
                        })
                    }
                })
            } else {
                const message = "To perform update of parameter you need to provide at least one of this 3 parameters : status, user or widthdraw !";
                return res.status(400).json({message});
            }

        } else {
            if (req.body.id) {
                Pieces.find({ where: { id: req.body.id } })
                    .on('success', function (piece) {
                        // Check if record exists in db
                        if (piece) {
                            piece.update({ 
                                number: req.body.number,
                                Pname: req.body.Pname,
                                Psurname: req.body.Psurname,
                                Ppicture: req.body.Ppicture,
                                Ppicture2: req.body.Ppicture2,
                                Pphone: req.body.p_phone,
                                typeId: req.body.typeId,
                                city: req.body.city,
                                street: req.body.street,
                                status: req.body.status,
                                Fphone: req.body.Fphone,
                                Fphone2: req.body.Fphone2,
                                UserId: req.body.UserId,
                                withdrawal_at: req.body.withdrawal_at
                            })
                        .success(function () {})
                        }
                    })
            } else {
                const message = 'To perform update you need to provide provide informations e.g: id.';
                return res.status(400).json({message});
            }
        }
    },
}