db.getCollection("Users").aggregate([
    {$match: {
        _id: ObjectId("62eaae2bac1ced6155525292"),
        $and: [
            {"entries.datecreated": {$gte: ISODate("2022-08-03T16:00:00.000Z")}},
            {"entries.datecreated": {$lte: ISODate("2022-08-04T15:59:00.000Z")}},
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
//    {$project: {entries: 0}},
    {$group: {_id: "$hour", ave: {$avg: "$moodvalue"}}}
])
