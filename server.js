if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const
 mongoose = require('mongoose')
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const passport = require('passport')



const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const Player = require('./models/player')

const indexRouter = require('./routes/index')
const playerRouter = require('./routes/players')
const registerRouter =require('./routes/register')
const gameRouter =require('./routes/game')
const initializePassport = require('./passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  _id => users.find(user => user._id === _id)
)
const users = require('./models/player')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use(express.static(__dirname + '/public'))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))



mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected'))


app.use('/', indexRouter)
app.use('/players', playerRouter)
app.use('/', registerRouter)
app.use('/game', gameRouter)


app.get('/login',checkNotAuthenticated, (req, res)=> {
  res.render('login')
})
app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/game',
  failureRedirect: '/login',
  failureFlash: true
}))

app.delete('/logout', function (req, res, next) {
  req.logOut(function (err) {
    if (err) {
      return next(err)
    }
    res.redirect('/login')
  });
});

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

app.listen(process.env.PORT || 3000)
