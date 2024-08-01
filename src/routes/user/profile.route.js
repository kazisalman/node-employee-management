const express = require('express')
const upload = require('../../utils/multer')
const profileController = require('../../controller/user/profileController')
const router = express.Router()

router.post("/",upload.single('profileImage'),profileController.update)

// router.get("/profile",controller.signup)


module.exports = router