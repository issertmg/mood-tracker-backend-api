const Entry = require('../models/Entry')
const User = require('../models/User')


exports.getEntriesV1 = (userid, date) => {
    return new Promise((resolve, reject) => {
        User.findById(userid,{},(error, user) => {
            if (error) {
                reject({status: 500, message: "Internal server error."})
            }
            else {
                if (date)
                    resolve(user.entries.filter(entry => entry.datecreated === date))
                else
                    resolve(user.entries)
            }
        })

    })
}
exports.addEntryV1 = (userid, entry) => {
    return new Promise((resolve, reject) => {
        const entryDoc = new Entry(entry)
        User.findById(userid,{},(error, user) => {
            if (error) {
                reject({status: 500, message: "Internal server error."})
            }
            else {
                user.entries.push(entryDoc)
                user.save((error, savedDoc) => {
                    if (error) {
                        reject({status: 500, message: "Unable to add entry."})
                    }
                    else {
                        resolve(entryDoc)
                    }
                })
            }
        })
    })
}
exports.getEntryV1 = (userid, entryid) => {
    return new Promise((resolve, reject) => {
        User.findById(userid,{},(error, user) => {
            const entry = user.entries.id(entryid)
            if (entry) {
                resolve(entry)
            }
            else {
                reject({status: 404, message: "Unable to find entry."})
            }
        })
    })
}
exports.updateEntryV1 = (userid, entryid, entry) => {
    return new Promise((resolve, reject) => {
        User.findById(userid,{},(error, user) => {
            const entryDoc = user.entries.id(entryid)
            if (entryDoc) {
                Object.keys(entry).forEach(key => entryDoc[key] = entry[key])
                user.save((error, savedDoc) => {
                    if (error) {
                        reject({status: 500, message: "Unable to update entry."})
                    }
                    else {
                        resolve()
                    }
                })
            }
            else {
                reject({status: 404, message: "Entry not found."})
            }
        })
    })
}
exports.deleteEntryV1 = (userid, entryid) => {
    return new Promise((resolve, reject) => {
        User.findById(userid,{},(error, user) => {
            const entryDoc = user.entries.id(entryid)
            if (entryDoc) {
                entryDoc.remove()
                user.save((error, savedDoc) => {
                    if (error) {
                        reject({status: 500, message: "Unable to delete entry."})
                    }
                    else {
                        resolve()
                    }
                })
            }
            else {
                reject({status: 404, message: "Entry not found."})
            }
        })
    })
}