const express = require('express')
const router = express.Router()
const {getUser, registerUser} = require('../controllers/userController')

router.route('/').post(registerUser)
router.route('/').get(getUser)
// router.route('./user').patch(userControllers)

module.exports = router