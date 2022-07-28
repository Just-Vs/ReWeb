const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
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
