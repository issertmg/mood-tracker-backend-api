const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
    datecreated: Date,
    mood: String,
    note: String
})

module.exports = mongoose.model('Entry', entrySchema);