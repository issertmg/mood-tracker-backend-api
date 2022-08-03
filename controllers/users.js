const UsersApiService = require('../services/UsersApiService')
const {response} = require("express");

exports.userLoginV1 = (req, res) => {
    const user = req.body

    res.send('user login')
}

exports.getUserV1 = (req, res) => {
    const userid = req.params.userid
    UsersApiService.getUserV1(userid)
        .then(response => {
            res.send(response)
        })
        .catch(response => {
            res.send(response)
        })
}

exports.createUserV1 = (req, res) => {
    const user = req.body
    UsersApiService.createUserV1(user)
        .then(response => {
            res.send(response)
        })
        .catch(response => {
            res.send(response)
        })
}

exports.updateUserV1 = (req, res) => {
    const userid = req.params.userid
    const user = req.body
    UsersApiService.updateUserV1(userid, user)
        .then(response => {
            res.send(response)
        })
        .catch(response => {
            res.send(response)
        })
}

exports.deleteUserV1 = (req, res) => {
    const userid = req.params.userid
    UsersApiService.deleteUserV1(userid)
        .then(response => {
            res.send(response)
        })
        .catch(response => {
            res.send(response)
        })
}



