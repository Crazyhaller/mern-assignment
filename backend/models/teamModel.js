const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  users: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ],
})

module.exports = mongoose.model('Team', teamSchema)
