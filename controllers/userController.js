const User = require('../models/userModel');

exports.userController = (req, res) => {
    const data = {
        firstName: req.body.firstname,
        lastName: req.body.lastName,
        email: req.body.email,
        country: req.body.country,
        password: req.body.password,
        photo: req.body.photo
    }
    User.create(data, (err, user) => {
        try {
            res.status(201).send({
                success: true,
                msg: user
            })
        } catch (err) {
            res.status(400).send({ err })
        }
    })
};