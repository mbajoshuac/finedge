const express = require('express')
const router = express.Router()
const {getUser} = require('../controllers/userController')

router.route('/').get(getUser)
// router.route('./user').post(registerUser)
// router.route('./user').patch(userControllers)

module.exports = router