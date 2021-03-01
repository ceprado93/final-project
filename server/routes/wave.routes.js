const express = require('express')
const router = express.Router()
const Wave = require('../models/Wave.model')

router.get('/', (req, res) => {

    Wave
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching Wave', err }))
})

router.get('/details/:wave_id', (req, res) => {

    Wave
        .findById(req.params.wave_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching Wave', err }))
})

router.post('/new', (req, res) => {

    const wave = { ...req.body, createdBy: req.user._id }

    Wave
        .create(wave)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving Wave', err }))
})

router.put('/edit/:wave_id', (req, res) => {

    Wave
        .findByIdAndUpdate(req.params.wave_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing Wave', err }))
})

router.post('/delete/:wave_id', (req, res) => {

    Wave
        .findByIdAndRemove(req.params.wave_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving Wave', err }))
})

module.exports = router