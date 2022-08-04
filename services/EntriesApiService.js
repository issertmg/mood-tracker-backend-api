const Entry = require('../models/Entry')
const User = require('../models/User')
const {ObjectId} = require("mongodb");
const MongoClient = require('mongodb').MongoClient;
const url = `mongodb+srv://issertmg:${process.env.DB_PASSWORD}@cluster0.lrs8g.mongodb.net/moodTrackerApp`

exports.getEntriesV1 = (userid) => {
    return new Promise((resolve, reject) => {
        User.findById(userid,{},(error, user) => {
            if (error) {
                reject({status: 500, message: "Internal server error."})
            }
            else {
                resolve(user.entries)
            }
        })

    })
}

exports.getLineChartDataV1 = (userid, dateFrom, dateTo) => {
    return new Promise((resolve, reject) => {
        // User.findOne({
        //     _id: userid,
        //     'entries.datecreated': {
        //         $gte: new Date(dateFrom),
        //         $lte: new Date(dateTo)
        //     }
        //     }, 'entries -_id',(error, user) => {
        //     if (error) {
        //         reject({status: 500, message: "Internal server error."})
        //     }
        //     else {
        //         resolve(user.entries)
        //     }
        // })

        MongoClient.connect(url, function(err, db){
            if (err) throw err
                console.log('here')
            const dbo = db.db("moodTrackerApp")
            dbo.collection("Users").aggregate([
                {$match: {
                        _id: new ObjectId("62eaae2bac1ced6155525292"),
                        $and: [
                            {"entries.datecreated": {$gte: new Date("2022-08-03T16:00:00.000Z")}},
                            {"entries.datecreated": {$lte: new Date("2022-08-04T15:59:00.000Z")}},
                        ]
                    }},
                {$project: {entries: 1, _id: 0}},
                {$unwind: "$entries"},
                {$addFields: {
                        moodvalue: {
                            $switch: {
                                branches: [
                                    {case: {$eq: ["$entries.mood", "💩"]}, then: 0},
                                    {case: {$eq: ["$entries.mood", "🙂"]}, then: 1},
                                    {case: {$eq: ["$entries.mood", "😍"]}, then: 2}
                                ]
                            }
                        },
                        hour: {
                            $hour: {
                                $add: ["$entries.datecreated", 8*3600000]
                            }
                        }
                    }},
                {$group: {_id: "$hour", ave: {$avg: "$moodvalue"}}}
            ]).toArray((error, result) => {
                console.log(result)
            })
        })

    })
}

exports.getEntriesByDateV1 = (userid, dateFrom, dateTo) => {
    return new Promise((resolve, reject) => {
        User.findOne({
            _id: userid,
            'entries.datecreated': {
                $gte: new Date(dateFrom),
                $lte: new Date(dateTo)
            }
        }, 'entries -_id',(error, user) => {
            if (error) {
                reject({status: 500, message: "Internal server error."})
            }
            else {
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