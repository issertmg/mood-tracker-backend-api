const UsersApiService = require('../services/UsersApiService')
const {response} = require("express");

exports.userLoginV1 = (req, res) => {
    const email = req.body.email
    const password = req.body.password
    UsersApiService.userLoginV1(email, password)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(response => {
            res.status(400).json(response)
        })
}

exports.getUserV1 = (req, res) => {
    const userid = req.params.userid
    UsersApiService.getUserV1(userid)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(response => {
            res.status(500).json(response)
        })
}

exports.createUserV1 = (req, res) => {
    const user = req.body
    UsersApiService.createUserV1(user)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(response => {
            res.status(500).json(response)
        })
}

exports.updateUserV1 = (req, res) => {
    const userid = req.params.userid
    const user = req.body
    UsersApiService.updateUserV1(userid, user)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(response => {
            res.status(500).json(response)
        })
}

exports.deleteUserV1 = (req, res) => {
    const userid = req.params.userid
    UsersApiService.deleteUserV1(userid)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(response => {
            res.status(500).json(response)
        })
}



