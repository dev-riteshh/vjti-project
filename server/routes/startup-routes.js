const express = require('express')
const { getallStartups, signupStartup } = require('../controllers/startup-controller')
const router = express.Router()


router.get('/',getallStartups)
router.post('/signup',signupStartup)

module.exports = router