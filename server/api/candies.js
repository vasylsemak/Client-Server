const router = require('express').Router()
const { Candy } = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const candies = await Candy.findAll()
    res.status(200).json(candies)
  } catch(err) {
    next(err)
  }
})

module.exports = router;

