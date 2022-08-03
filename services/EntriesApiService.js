const Entry = require('../models/Entry')
const User = require('../models/User')


exports.getEntriesV1 = (userid, date) => {
    return new Promise((resolve, reject) => {
        const response = {}
        User.findById(userid,{},(error, user) => {
            if (error) {
                response['status'] = 500
                reject(response)
            }
            else {
                const entries = user.entries.filter(entry => entry.datecreated === date)
                response['entries'] = entries
                response['status'] = 200
                resolve(response)
            }
        })

    })
}
exports.addEntryV1 = (userid, entry) => {
    return new Promise((resolve, reject) => {
        const response = {}
        const entryDoc = new Entry(entry)
        User.findById(userid,{},(error, user) => {
            if (error) {
                response['status'] = 500
                reject(response)
            }
            else {
                user.entries.push(entryDoc)
                user.save().then(savedDoc => {
                    if (savedDoc === user) {
                        response['status'] = 201
                        resolve(response)
                    }
                    else {
                        response['status'] = 500
                        reject(response)
                    }
                })
            }
        })
    })
}
exports.getEntryV1 = (userid, entryid) => {
    return new Promise((resolve, reject) => {
        const response = {}
        User.findById(userid,{},(error, user) => {
            const entry = user.entries.id(entryid)
            if (entry) {
                response['entry'] = entry
                response['status'] = 200
                resolve(response)
            }
            else {
                response['status'] = 500
                reject(response)
            }
        })
    })
}
exports.updateEntryV1 = (userid, entryid, entry) => {
    return new Promise((resolve, reject) => {
        const response = {}
        User.findById(userid,{},(error, user) => {
            const entryDoc = user.entries.id(entryid)
            if (entryDoc) {
                Object.keys(entry).forEach(key => entryDoc[key] = entry[key])
                user.save().then(savedDoc => {
                    if (savedDoc === user) {
                        response['status'] = 200
                        resolve(response)
                    }
                    else {
                        response['status'] = 500
                        reject(response)
                    }
                })
            }
            else {
                response['status'] = 500
                reject(response)
            }
        })
    })
}
exports.deleteEntryV1 = (userid, entryid) => {
    return new Promise((resolve, reject) => {
        const response = {}
        User.findById(userid,{},(error, user) => {
            const entryDoc = user.entries.id(entryid)
            if (entryDoc) {
                entryDoc.remove()
                user.save().then(savedDoc => {
                    if (savedDoc === user) {
                        response['status'] = 200
                        resolve(response)
                    }
                    else {
                        response['status'] = 500
                        reject(response)
                    }
                })
            }
            else {
                response['status'] = 500
                reject(response)
            }
        })
    })
}