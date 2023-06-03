const jwt = require('jsonwebtoken')
const privateKey = require('../auth/private_key')

module.exports = (req, res, next) => {
    const authorizationHeader = req.headers.authorization

    if (!authorizationHeader) {
        const message = `Auth token not provided`
        return res.status(401).json({ message })
    }

    const token = authorizationHeader.split(' ')[1]
    const decodedToken = jwt.verify(token, privateKey, (error, decodedToken) => {
        if (error) {
            const message = `the user is not authorized to access this resource`
            return res.status(401).json({message, data: error})
        }

        const userId = decodedToken.userId
        if (req.body.userId && req.body.userId !== userId) {
            const message = `Invalide Id`
            res.status(401).json({ message })
        } else {
            next()
        }


    })

}

/********************************* To us it ***************************************
 * 
 * Simply add const auth = require('../app/Http/Middleware/auth/auth') on router
 * 
 *  and add auth in route you want to add restriction.
 *      eg: router.post('/api/posts', auth, PostController)
 * 
 *********************************************************************************/