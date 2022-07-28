const express = require('express')
const router = express.Router()
const Score = require('../models/score')

router.get('/', async (req, res)=> {
  let searchOptions = {}
  try{
    const scores = await Score.find({})
    res.render('index', {scores: scores})
  }catch{
    
  }
})

module.exports = router
