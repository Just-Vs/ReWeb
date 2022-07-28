const express = require('express')
const router = express.Router()
const Player = require('../models/player')

router.get('/register',checkNotAuthenticated, (req, res)=> {
  res.render('register', { player: new Player()})
})


router.post('/register', async (req, res) => {
  const player = new Player({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
  try{
    const newPlayer = await player.save()
    //res.redirect(`players/${newPlayer.id}`)
    res.redirect(`players`)
  } catch{
    res.render('register',{
      player: player,
      errorMessage: 'Failed to create Player'

    })
  }
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}

module.exports = router
