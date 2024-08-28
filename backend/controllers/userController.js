const User = require('../models/userModel')
const { getPagination } = require('../utils/pagination')

exports.getUsers = async (req, res) => {
  const { page, size = 20, name, domain, gender, availability } = req.query
  const { limit, offset } = getPagination(page, size)

  let query = {}
  if (name) {
    query.$or = [
      { first_name: { $regex: name, $options: 'i' } },
      { last_name: { $regex: name, $options: 'i' } },
    ]
  }
  if (domain) query.domain = { $regex: new RegExp(domain, 'i') }
  if (gender) query.gender = gender
  if (availability) query.available = availability === 'true'

  try {
    const users = await User.paginate(query, { offset, limit })
    res.status(200).json(users)
  } catch (error) {
    console.error('Error fetching users:', error)
    res.status(500).json({ message: 'Error fetching users' })
  }
}

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ message: 'User not found' })
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.createUser = async (req, res) => {
  const { name, domain, gender, availability } = req.body
  try {
    const newUser = new User({ name, domain, gender, availability })
    await newUser.save()
    res.status(201).json(newUser)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!updatedUser) return res.status(404).json({ message: 'User not found' })
    res.json(updatedUser)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) return res.status(404).json({ message: 'User not found' })
    res.json({ message: 'User deleted' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
