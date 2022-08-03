const mongoose = require('mongoose')
const entrySchema = require('../models/Entry').schema
const crypto = require('crypto')

const userSchema = mongoose.Schema({
    firstname: {type: String, default: ''},
    middlename: {type: String, default: ''},
    lastname: {type: String, default: ''},
    height: {type: Number, default: 0},
    weight: {type: Number, default: 0},
    email: {type: String, required: true},
    password: {type: String, required: true},
    entries: [entrySchema]
})

userSchema.methods.hashPassword = function() {
    const salt = crypto.randomBytes(16).toString('hex')
    const key = crypto.scryptSync(this.password, salt, 64).toString('hex')
    this.password = salt + ':' + key
}

userSchema.methods.verifyPassword = function(password) {
    const [salt, key] = this.password.split(':')
    const derivedKey = crypto.scryptSync(password, salt, 64).toString('hex')
    return key === derivedKey
}

module.exports = mongoose.model('User', userSchema, 'Users');