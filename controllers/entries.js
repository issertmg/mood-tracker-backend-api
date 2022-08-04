const EntriesApiService = require("../services/EntriesApiService");

exports.getLineChartDataV1 = (req, res) => {
    const userid = req.params.userid
    const dateFrom = req.query.dateFrom
    const dateTo = req.query.dateTo
    const minuteOffset = Number(req.query.minuteOffset)
    EntriesApiService.getLineChartDataV1(userid, dateFrom, dateTo, minuteOffset)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(response => {
            res.status(response.status).json({message: response.message})
        })
}

exports.getEntriesV1 = (req, res) => {
    const userid = req.params.userid
    const dateFrom = req.query.dateFrom
    const dateTo = req.query.dateTo

    if (dateFrom && dateTo) {
        EntriesApiService.getEntriesByDateV1(userid, dateFrom, dateTo)
            .then(response => {
                res.status(200).json(response)
            })
            .catch(response => {
                res.status(response.status).json({message: response.message})
            })
    }
    else {
        EntriesApiService.getEntriesV1(userid)
            .then(response => {
                res.status(200).json(response)
            })
            .catch(response => {
                res.status(response.status).json({message: response.message})
            })
    }
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
            res.status(response.status).json({message: response.message})
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
            res.status(response.status).json({message: response.message})
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
        .then(() => {
            res.status(200).end()
        })
        .catch(response => {
            res.status(response.status).json({message: response.message})
        })
}
exports.deleteEntryV1 = (req, res) => {
    const userid = req.params.userid
    const entryid = req.params.entryid
    EntriesApiService.deleteEntryV1(userid, entryid)
        .then(() => {
            res.status(200).end()
        })
        .catch(response => {
            res.status(response.status).json({message: response.message})
        })
}