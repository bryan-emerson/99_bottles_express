var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.set('view engine', 'hbs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public')) // Serve static content (css, etc) for the app from the “public” directory in the application directory

app.listen(3001, function () {
  console.log('app listening on port ' + this.address().port)
})

app.get('/', function (req, res) {
  res.render('welcome')
})

app.post('/', function (req, res) {
  res.render('index', {
    player_name: req.body.player_name,
    numberOfBottles: 99,
    next: 98
  })
})

app.get('/:numberOfBottles/', function (req, res) {
  var numberOfBottles = req.params.numberOfBottles || 99
  var next = numberOfBottles - 1
  res.render('index', {numberOfBottles, next})
  // if (numberOfBottles > 1) {
  //   res.send(`${numberOfBottles} bottles of beer on the wall <a href='/${next}'>Take one down</a> pass it around`)
  // } else {
  //   res.send('1 bottle of beer on the wall <a href="/">Start Over</a>')
  // }
})
