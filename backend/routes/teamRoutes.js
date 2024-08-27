const express = require('express')
const { createTeam, getTeamById } = require('../controllers/teamController')
const router = express.Router()

router.post('/team', createTeam)
router.get('/team/:id', getTeamById)

module.exports = router
