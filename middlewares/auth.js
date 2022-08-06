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
            console.log('token error', error.name)
        }
    }

    res.status(401).end()
}

module.exports = auth