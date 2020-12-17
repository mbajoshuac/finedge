const mongoose = require('mongoose')
const { Schema } = mongoose

const usersSchema = new mongoose.Schema({
    firstName: String,
<<<<<<< HEAD
    lastName: String,
    email: String,
    country: String,
=======
    lastName:String,
    phoneNumber:Number,
    email: String,
    country : String,
>>>>>>> a864cf0c405e04641fd30f64edf7e23751838adf
    password: String,
    photo: String
})

module.exports = mongoose.model(user, usersSchema)

