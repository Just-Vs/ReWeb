const express = require('express')
const router = express.Router()
const Player = require('../models/player')

//All
router.get('/', async (req, res)=> {
  res.render('game/preGame')
})

//new
router.get('/score', (req, res)=> {
  res.render('game/score')
})

//Create
router.get('/play', async (req, res) => {
  res.render('game/game')
})
router.get('/play2', async (req, res) => {
  res.render('game/game2')
})

router.post('/play', async (req, res) => {
  const score = new Score({
    name: req.body.name
  })
  try{
    const newScore = await score.save()
    //res.redirect(`players/${newPlayer.id}`)
    res.redirect(`score`)
  } catch{
    res.render('players/new',{
      player: player,
      errorMessage: 'Failed to create Player'

    })
  }
})


module.exports = router
