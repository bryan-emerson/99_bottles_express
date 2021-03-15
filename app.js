let express = require('express')
let router = require('./router.js')

let app = express()

app.use(router)

module.exports = app