let express = require('express')

let router = new express.Router()

router.get('/', (request, response)=> {
  let data = {numOnWall: 99, link: 'localhost:9000/98'}
  response.json(data)
})

router.get('/:bottles', (request, response)=> {
  let bottles = request.params.bottles
  if (bottles > 0) {
    let data = {numOnWall: bottles, nextLink: `http://localhost:9000/${bottles - 1}`}
    response.json(data)
  } else {
    let data = {numOnWall: 99, link: 'localhost:9000/98'}
    response.json(data)
  }
})

module.exports = router