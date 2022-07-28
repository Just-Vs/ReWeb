const express = require('express')
const router = express.Router()
const Score = require('../models/score')

router.get('/', async (req, res)=> {
  let searchOptions = {}
  if (req.query.name != null && req.query.name !==''){
    searchOptions.name = new RegExp(req.query.name, 'i')
  }
  try{
    const scores = await Score.find(searchOptions)
    res.render('score/index', {scores: scores, searchOptions: req.query})
  }catch{

  }
  res.render('index')
})

module.exports = router
