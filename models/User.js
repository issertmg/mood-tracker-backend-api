const mongoose = require('mongoose')
const entrySchema = require('../models/Entry').schema

const userSchema = mongoose.Schema({
    firstname: {type: String, default: ''},
    middlename: {type: String, default: ''},
    lastname: {type: String, default: ''},
    height: {type: Number, default: 0},
    weight: {type: Number, default: 0},
    email: {type: String, default: ''},
    password: {type: String, default: ''},
    entries: [entrySchema]
})

module.exports = mongoose.model('User', userSchema, 'Users');