const EntriesApiService = require("../services/EntriesApiService");

exports.getEntriesV1 = (req, res) => {
    const userid = req.params.userid
    const date = req.query.date
    EntriesApiService.getEntriesV1(userid, date)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(response => {
            res.status(500).json(response)
        })
}

exports.addEntryV1 = (req, res) => {
    const userid = req.params.userid
    const entry = {
        mood: req.body.mood,
        note: req.body.note
    }
    EntriesApiService.addEntryV1(userid, entry)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(response => {
            res.status(500).json(response)
        })
}

exports.getEntryV1 = (req, res) => {
    const userid = req.params.userid
    const entryid = req.params.entryid
    EntriesApiService.getEntryV1(userid, entryid)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(response => {
            res.status(500).json(response)
        })
}
exports.updateEntryV1 = (req, res) => {
    const userid = req.params.userid
    const entryid = req.params.entryid
    const entry = {
        mood: req.body.mood,
        note: req.body.note
    }
    EntriesApiService.updateEntryV1(userid, entryid, entry)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(response => {
            res.status(500).json(response)
        })
}
exports.deleteEntryV1 = (req, res) => {
    const userid = req.params.userid
    const entryid = req.params.entryid
    EntriesApiService.deleteEntryV1(userid, entryid)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(response => {
            res.status(500).json(response)
        })
}