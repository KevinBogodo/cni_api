const User = require('../../../Models/Users/User');
const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');
const privatekey = require('../../Middleware/auth/private_key');
const { ValidationError, UniqueConstraintError } = require('sequelize');

module.exports = {

    // Function to log
    login: (req, res) => {

        User.findOne({ where: { username: req.body.username} })
        .then(user =>{

            if(!user) {
                const message = `User not found`
                return res.status(404).json({ message })
            };

            bcrypt.compare(req.body.password, user.password).then(isPasswordValid => {
                if (!isPasswordValid) {
                    const message = 'Wrong password'
                    return res.status(401).json({ message })
                }

                // JWT
                const token = jwt.sign(
                    {userId: user.id },
                    privatekey,
                    { expiresIn: '24h'}
                )

                const message = 'Connected'
                return res.json({ message, data: user, token })
            });
        })
        .catch(error => {
            const message = 'User cannot be connect ! please try again latter';
            return res.json({ message, data: error })
        })
    },

    // Route for reg user
    register: (req, res) => {

        bcrypt.hash(req.body.password, 10)
        .then(hash => 
            User.create({ 
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                phone1: req.body.phone1,
                phone2: req.body.phone2,
                phone3: req.body.phone3,
                username: req.body.username,
                password: hash,
                town: req.body.town
            })
        )
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

    user: (req, res) => {
        const message = 'Get current user';
        return res.json({ message })
    },

    reset: (req, res) => {
        const message = 'Reset pasword';
        return res.json({ message })
    }

}