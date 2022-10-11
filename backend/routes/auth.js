const express = require('express')
const User = require('../models/User')
const router = express.Router()

// create a user using : POST "api/auth/".
router.post('/', (req, res) => {
  console.log(req.body)
  const user = User(req.body)
  user.save()
  res.send('Hey!')

  //   obj = {
  //     a: 'hey!',
  //     num: 35,
  //   }
  //   res.json(obj)
})
module.exports = router
