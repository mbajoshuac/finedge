const User = require('../models/userModel');
const {regAuth} = require('../middleware/validation');
const { catchWrapper } = require('../utils/helpers');

exports.registerUser = catchWrapper (async(req, res, next) => {
    const inputValidation = await regAuth.validateAsync(req.body)
    const user = new User({...inputValidation})
    await user.save ({ new: true }, (err) => {
    if (err)  res.status(400).send('User detail could not be registered: Check server connection')})
    res.status(200).send({user})
    
});


exports.getUser = catchWrapper (async(req, res, next) => {
    res.status(200).send({message: "Users are ready"})
})