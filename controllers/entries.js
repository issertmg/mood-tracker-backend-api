exports.getEntriesV1 = (req, res) => {
    const userid = req.params.userid

    res.send("get all entries")
}

exports.addEntryV1 = (req, res) => {
    const userid = req.params.userid

    res.send("added an entry")
}

exports.getEntryV1 = (req, res) => {
    const userid = req.params.userid
    const entryid = req.params.entryid

    res.send("get an entry")
}
exports.updateEntryV1 = (req, res) => {
    const userid = req.params.userid
    const entryid = req.params.entryid

    res.send("updated an entry")
}
exports.deleteEntryV1 = (req, res) => {
    const userid = req.params.userid
    const entryid = req.params.entryid

    res.send("deleted an entry")
}