const express = require('express')
const router = express.Router()

//All
router.get('/', (req, res)=> {
  res.render('players/index')
})

//new
router.get('/new', (req, res)=> {
res.render('players/new')
})

//Create
router.post('/', (req, res)=> {
  re.send('Create')
})

module.exports = router
