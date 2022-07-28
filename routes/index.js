const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const Score = require('../models/score')
router.get('/', (req, res)=> {
  res.render('index')
})

module.exports = router
