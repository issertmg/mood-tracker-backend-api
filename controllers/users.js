exports.userLoginV1 = (req, res) => {
    res.send('user login')
}

exports.getUserV1 = (req, res) => {
    const userid = req.params.userid

    res.send(userid)
}

exports.createUserV1 = (req, res) => {
    res.send('create user')
}

exports.updateUserV1 = (req, res) => {
    const userid = req.params.userid

    res.send('user updated')
}

exports.deleteUserV1 = (req, res) => {
    const userid = req.params.userid

    res.send("user deleted")
}



