const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: Boolean,
    default: false
  },
  points:{
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: 'Score'
  },
  picture:{
    type: String,
    required: false
  },
tournamentPossition: {
  type: String,
  required: false
  }
})

module.exports = mongoose.model('Player', playerSchema)
