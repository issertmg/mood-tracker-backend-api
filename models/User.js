const mongoose = require('mongoose')
const entrySchema = require('../models/Entry')

const userSchema = mongoose.Schema({
    firstname: String,
    middlename: String,
    lastname: String,
    height: Number,
    weight: Number,
    email: String,
    password: String,
    entries: [entrySchema]
})

module.exports = mongoose.model('User', userSchema, 'Users');