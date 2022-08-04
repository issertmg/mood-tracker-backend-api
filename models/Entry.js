const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
    datecreated: {type: Date, default: Date.now},
    mood: {type: String, required: true},
    note: {type: String, required: true}
})

module.exports = mongoose.model('Entry', entrySchema);