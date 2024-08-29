const express = require('express')
const projectController = require('../controller/project')
const authMiddleware = require('../middleware/authMiddleware')
const router = express.Router()


router.post("/create",authMiddleware, projectController.createProject)

module.exports = router