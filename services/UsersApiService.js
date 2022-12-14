const User = require('../models/User')
const jwt = require('jsonwebtoken')
const util = require('../utils')

exports.loginV1 = (email, password) => {
    return new Promise((resolve, reject) => {
        User.findOne({email: email}, (error, userDoc) => {
            if (userDoc) {
                if (userDoc.verifyPassword(password)) {
                    const token = util.generateToken({
                        userid: userDoc._id
                    })
                    resolve({token, userid: userDoc._id})
                }
                else {
                    reject({status: 401, message: "Incorrect password."})
                }
            }
            else {
                reject({status: 404, message: "User not found."})
            }
        })
    })
}

exports.createUserV1 = (user) => {
    return new Promise((resolve, reject) => {
        const userDoc = new User(user)
        userDoc.hashPassword()
        userDoc.setNickname()
        userDoc.save((error, savedDoc) => {
            if (error) {
                reject({status: 400, message: "User has invalid attribute/s."})
            }
            else {
                const token = util.generateToken({
                    userid: savedDoc._id
                })
                resolve({token, userid: savedDoc._id})
            }
        })
    })
}
exports.getUserV1 = (userid) => {
    return new Promise((resolve, reject) => {
        User.findById(userid, {}, (error, user) => {
            if (error) {
                reject({status: 404, message: "Unable to find user."})
            }
            else {
                resolve(user)
            }
        })
    })
}
exports.updateUserV1 = (userid, user) => {
    return new Promise((resolve, reject) => {
        User.findByIdAndUpdate(userid, user, error => {
            if (error) {
                reject({status: 404, message: "Unable to update user information."})
            }
            resolve()
        })
    })
}
exports.deleteUserV1 = (userid) => {
    return new Promise((resolve, reject) => {
        User.findByIdAndDelete(userid, {}, error => {
            if (error) {
                reject({status: 404, message: "Unable to delete user."})
            }
            resolve()
        })
    })
}