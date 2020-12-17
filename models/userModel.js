const mongoose = require('mongoose')
const { Schema } = mongoose

const usersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    country: String,
    password: String,
    photo: String
})

module.exports = mongoose.model(user, usersSchema)

