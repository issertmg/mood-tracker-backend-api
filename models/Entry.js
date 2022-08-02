const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
    datecreated: {type: Date, default: Date.now},
    mood: {type: String, default: ''},
    note: {type: String, default: ''}
})

module.exports = mongoose.model('Entry', entrySchema, 'Entries');