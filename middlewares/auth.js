const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
    const token = req.headers.authorization
    const userid = req.params.userid

    if (token) {
        try {
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
            if (decodedToken && decodedToken.userid === userid) {
                next()
            }
        } catch (error) {
            res.status(401).json({message: error.name})
        }
    }
    else {
        res.status(401).json({message: 'Invalid token'})
    }
}

module.exports = auth