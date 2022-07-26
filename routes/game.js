const express = require('express')
const router = express.Router()
const Player = require('../models/player')

//All
router.get('/', async (req, res)=> {
  res.render('preGame')
})

//new
router.get('/score', (req, res)=> {
  res.send('score')
})

//Create
router.get('/play', async (req, res) => {
  res.render('game')
})



module.exports = router
