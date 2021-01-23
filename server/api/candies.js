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

router.get('/:id', async (req, res, next) => {
  try {
    const oneCandy = await Candy.findByPk(req.params.id)
    if(!oneCandy.id) res.sendStatus(404)
    else res.status(200).json(oneCandy)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async(req, res, next) => {
  try {
    const candy = await Candy.findByPk(req.params.id)
    if(!candy.id) res.sendStatus(404)
    else {
      await candy.update(req.body)
      res.status(204).json(candy)
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router;

