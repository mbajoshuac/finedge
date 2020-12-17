const mongoose = require('mongoose')
const { Schema } = mongoose

const usersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNumber: String,
    email: String,
    country: String,
    password: String,
    photo: String

})

module.exports = mongoose.model('User', usersSchema)

