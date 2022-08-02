
exports.userLoginV1 = (body) => {
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
exports.createUserV1 = (body) => {
    return new Promise((resolve, reject) => {
        resolve()
    })
}
exports.getUserV1 = (userid) => {
    return new Promise((resolve, reject) => {
        resolve()
    })
}
exports.updateUserV1 = (userid, body) => {
    return new Promise((resolve, reject) => {
        resolve()
    })
}
exports.deleteUserV1 = (userid) => {
    return new Promise((resolve, reject) => {
        resolve()
    })
}