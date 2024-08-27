const Team = require('../models/teamModel')
const User = require('../models/userModel')

exports.createTeam = async (req, res) => {
  const { name, userIds } = req.body
  try {
    const users = await User.find({ _id: { $in: userIds }, availability: true })
    const uniqueDomains = [...new Set(users.map((user) => user.domain))]
    if (uniqueDomains.length !== users.length) {
      return res.status(400).json({ message: 'Users must have unique domains' })
    }
    const newTeam = new Team({ name, users: userIds })
    await newTeam.save()
    res.status(201).json(newTeam)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.getTeamById = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id).populate('users')
    if (!team) return res.status(404).json({ message: 'Team not found' })
    res.json(team)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
