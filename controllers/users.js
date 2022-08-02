const UsersApiService = require('../api/UsersApiService')
const {response} = require("express");

exports.userLoginV1 = (req, res) => {
    const user = req.body

    res.send('user login')
}

exports.getUserV1 = (req, res) => {
    const userid = req.params.userid

    res.send(userid)
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

    res.send('user updated')
}

exports.deleteUserV1 = (req, res) => {
    const userid = req.params.userid

    res.send("user deleted")
}



