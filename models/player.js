const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
  email: {
    type: String,
    required: true
  }
  password: {
    type: Password,
    required: true
  }
  type: {
    Boolean: Binary,
    default: false
  }
})

module.exports = mongoose.model('Player', playerSchema)
