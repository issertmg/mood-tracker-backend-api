
exports.getEntriesV1 = (userid) => {
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
exports.addEntryV1 = (userid, entry) => {
    return new Promise((resolve, reject) => {
        resolve()
    })
}
exports.getEntryV1 = (userid, entryid) => {
    return new Promise((resolve, reject) => {
        resolve()
    })
}
exports.updateEntryV1 = (userid, entryid, entry) => {
    return new Promise((resolve, reject) => {
        resolve()
    })
}
exports.deleteEntryV1 = (userid, entryid) => {
    return new Promise((resolve, reject) => {
        resolve()
    })
}