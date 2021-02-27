const express = require('express')
const router = express.Router()
const Waves = require('../models/waves.model')

router.get('/', (req, res) => {

    Waves
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching waves', err }))
})

router.get('/details/:waves_id', (req, res) => {

    Waves
        .findById(req.params.waves_id)
        .then(response  => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching coaster', err }))
})

router.post('/new', (req, res) => {

    const waves = { ...req.body, owner: req.user._id }

    Waves
        .create(waves)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving waves', err }))
})

router.put('/edit/:waves_id', (req, res) => {

    Waves
        .findByIdAndUpdate(req.params.waves_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing waves', err }))
})

router.post('/delete/:waves_id', (req, res) => {

    Waves
        .findByIdAndRemove(req.params.waves_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving waves', err }))
})

module.exports = router