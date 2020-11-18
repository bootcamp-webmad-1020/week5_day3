const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant.model');

// Todos los restaurantes
router.get('/', (req, res) => {

    Restaurant
        .find()
        .then(restaurants => res.render('restaurants/all-restaurants', { restaurants }))
        .catch(err => next(err))
})


// Formulario nuevo restaurante (renderizado)
router.get('/new', (req, res) => res.render('restaurants/new-restaurant'))


// Formulario nuevo restaurante (gestión)
router.post('/new', (req, res, next) => {

    const { name, description, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Restaurant
        .create({ name, description, location })
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})



module.exports = router