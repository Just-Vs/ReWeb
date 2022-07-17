const express = require('express')
const router = express.Router()
const Player = require('../models/player')

//All
router.get('/', (req, res)=> {
  res.render('players/index')
})

//new
router.get('/new', (req, res)=> {
res.render('players/new', { player: new Player() })
})

//Create
router.post('/', (req, res)=> {
  res.send('Create')
})

module.exports = router
