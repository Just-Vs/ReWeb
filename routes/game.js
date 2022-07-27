const express = require('express')
const router = express.Router()
const Player = require('../models/player')

//All
router.get('/', async (req, res)=> {
  res.render('preGame')
})

//new
router.get('/score', (req, res)=> {
  res.render('score')
})

//Create
router.get('/play', async (req, res) => {
  res.render('game')
})
router.get('/play2', async (req, res) => {
  res.render('game2')
})

module.exports = router
