const User = require('../models/userModel');
// const validate = require('../middleware/validation');
const { catchWrapper } = require('../utils/helpers');

// exports.registerUser = catchWrapper (async(req, res, next) => {
//     const {firstname,lastname,email,country,password,photo,phoneNumber} = req.body
//     const user = new User({firstname,lastname,email,country,password,photo,phoneNumber})
//     await user.save ({ new: true }, (err)=> {
//         if (err)
//         next(res.status(400).send('an error just occured!'))
//     })
// });


exports.getUser = catchWrapper (async(req, res, next) => {
    res.status(200).send({message: "Users are ready"})
})