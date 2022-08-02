const User = require('../models/User')

exports.userLoginV1 = (user) => {
    return new Promise((resolve, reject) => {
        const examples = {};
        examples['application/json'] = "497f6eca-6276-4993-bfeb-53cbbbba6f08";
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    })
}
exports.createUserV1 = (user) => {
    return new Promise((resolve, reject) => {
        const userDoc = new User(user)
        userDoc.save().then(result => {
            resolve(result)
        })
    })
}
exports.getUserV1 = (userid) => {
    return new Promise((resolve, reject) => {
        resolve()
    })
}
exports.updateUserV1 = (userid, user) => {
    return new Promise((resolve, reject) => {
        resolve()
    })
}
exports.deleteUserV1 = (userid) => {
    return new Promise((resolve, reject) => {
        resolve()
    })
}