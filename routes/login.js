const express = require('express')
const router = express.Router()
const Player = require('../models/player')
const passport = require('passport')
const users = Player.find({})
const initializePassport = require('../passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)
router.get('/login',checkNotAuthenticated, (req, res)=> {
  res.render('login')
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
