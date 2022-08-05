const UsersApiService = require('../services/UsersApiService')
const jwt = require('jsonwebtoken')

exports.userLoginV1 = (req, res) => {
    const email = req.body.email
    const password = req.body.password
    UsersApiService.userLoginV1(email, password)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(response => {
            res.status(response.status).json({message: response.message})
        })
}

exports.getUserV1 = (req, res) => {
    const userid = req.params.userid

    //Sample checking of token
    const jToken = req.query.jToken
    const decoded = jwt.verify(jToken, process.env.JWT_SECRET)
    console.log(decoded)


    UsersApiService.getUserV1(userid)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(response => {
            res.status(response.status).json({message: response.message})
        })
}

exports.createUserV1 = (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    }

    UsersApiService.createUserV1(user)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(response => {
            res.status(response.status).json({message: response.message})
        })
}

exports.updateUserV1 = (req, res) => {
    const userid = req.params.userid
    const user = {
        nickname: req.body.nickname,
        givenname: req.body.givenname,
        lastname: req.body.lastname,
        gender: req.body.gender,
        height: req.body.height,
        weight: req.body.weight,
        birthday: req.body.birthday
    }

    UsersApiService.updateUserV1(userid, user)
        .then(() => {
            res.status(200).end()
        })
        .catch(response => {
            res.status(response.status).json({message: response.message})
        })
}

exports.deleteUserV1 = (req, res) => {
    const userid = req.params.userid
    UsersApiService.deleteUserV1(userid)
        .then(() => {
            res.status(200).end()
        })
        .catch(response => {
            res.status(response.status).json({message: response.message})
        })
}



