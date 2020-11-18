const express = require('express')
const router = express.Router()

const Restaurant = require('./../models/restaurant.model')

// Endpoints
router.get('/restaurants', (req, res) => {

    Restaurant
        .find()
        .then(restaurants => res.json(restaurants))
        .catch(err => next(err))
})

module.exports = router