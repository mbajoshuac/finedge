const express = require('express')
const router = express.Router()
const {registerUser, getUser} = require('../controllers/userController')

router.route('./user').post(registerUser)
router.route('./user').get(getUser)
// router.route('./user').patch(userControllers)

module.exports = router