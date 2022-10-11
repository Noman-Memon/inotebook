const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  obj = {
    a: 'hey!',
    num: 456,
  }
  res.json(obj)
})
module.exports = router
