const express = require('express')
const router = express.Router()

const Score = require('../models/score')
router.get('/', (req, res)=> {
  res.render('index')
})

module.exports = router
