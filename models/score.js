const mongoose = require('mongoose')

const scoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
  points: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Player', playerSchema)
