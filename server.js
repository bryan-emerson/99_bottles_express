let app = require('./app.js')

let server = app.listen(9000)

server.on('listening', ()=> console.log('server is listening...'))

server.on('error', error=> console.error('server error', error))


module.exports = server