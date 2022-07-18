const express = require('express')
const router = express.Router()
const Player = require('../models/player')

//All
router.get('/', async (req, res)=> {
  let searchOptions = {}
  if (req.query.name != null && req.query.name !==''){
    searchOptions.name = new RegExp(req.query.name, 'i')
  }
  try{
    const players = await Player.find(searchOptions)
    res.render('players/index', {players: players, searchOptions: req.query})
  }catch{
    res.redirect('/')
  }

})

//new
router.get('/new', (req, res)=> {
  res.render('players/new', { player: new Player() })
})

//Create
router.post('/', async (req, res) => {
  const player = new Player({
    name: req.body.name
  })
  try{
    const NewPlayer = await player.save()
    //res.redirect(`players/${newPlayer.id}`)
    res.redirect(`players`)
  } catch{
    res.render('players/new',{
      player: player,
      errorMessage: 'Failed to create Player'

    })
  }
})

module.exports = router
