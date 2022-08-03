const User = require('../models/User')

exports.userLoginV1 = (user) => {
    return new Promise((resolve, reject) => {
        const response = {}
        //TODO
    })
}
exports.createUserV1 = (user) => {
    return new Promise((resolve, reject) => {
        const response = {}
        const userDoc = new User(user)
        userDoc.save().then(savedDoc => {
            if (savedDoc === userDoc) {
                response['status'] = 201
                response['user'] = savedDoc
                resolve(response)
            }
            else {
                response['status'] = 500
                reject(response)
            }
        })
    })
}
exports.getUserV1 = (userid) => {
    return new Promise((resolve, reject) => {
        const response = {}
        User.findById(userid, {}, (err, user) => {
            if (err) {
                response['status'] = 500
                reject(response)
            }
            else {
                response['status'] = 200
                response['user'] = user
                resolve(response)
            }
        })
    })
}
exports.updateUserV1 = (userid, user) => {
    return new Promise((resolve, reject) => {
        const response = {}
        User.findByIdAndUpdate(userid, user, err => {
            if (err) {
                response['status'] = 500
                reject(response)
            }
            else {
                response['status'] = 200
                resolve(response)
            }
        })
    })
}
exports.deleteUserV1 = (userid) => {
    return new Promise((resolve, reject) => {
        const response = {}
        User.findByIdAndDelete(userid, {}, err => {
            if (err) {
                response['status'] = 500
                reject(response)
            }
            else {
                response['status'] = 200
                resolve(response)
            }
        })
    })
}