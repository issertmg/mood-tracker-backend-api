const EntriesApiService = require("../api/EntriesApiService");

exports.getEntriesV1 = (req, res) => {
    const userid = req.params.userid
    const date = req.query.date
    EntriesApiService.getEntriesV1(userid, date)
        .then(response => {
            res.send(response)
        })
        .catch(response => {
            res.send(response)
        })
}

exports.addEntryV1 = (req, res) => {
    const userid = req.params.userid
    const entry = req.body
    EntriesApiService.addEntryV1(userid, entry)
        .then(response => {
            res.send(response)
        })
        .catch(response => {
            res.send(response)
        })
}

exports.getEntryV1 = (req, res) => {
    const userid = req.params.userid
    const entryid = req.params.entryid
    EntriesApiService.getEntryV1(userid, entryid)
        .then(response => {
            res.send(response)
        })
        .catch(response => {
            res.send(response)
        })
}
exports.updateEntryV1 = (req, res) => {
    const userid = req.params.userid
    const entryid = req.params.entryid
    const entry = req.body
    EntriesApiService.updateEntryV1(userid, entryid, entry)
        .then(response => {
            res.send(response)
        })
        .catch(response => {
            res.send(response)
        })
}
exports.deleteEntryV1 = (req, res) => {
    const userid = req.params.userid
    const entryid = req.params.entryid
    EntriesApiService.deleteEntryV1(userid, entryid)
        .then(response => {
            res.send(response)
        })
        .catch(response => {
            res.send(response)
        })
}