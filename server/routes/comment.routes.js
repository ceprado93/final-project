const express = require('express')
const router = express.Router()
const Comment = require('../models/comment.model')
const User = require('../models/user.model')

router.get('/', (req, res) => {

    Comment
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching Comment', err }))
})

router.get('/users', (req, res) => {

    User
        .find()
        .select('username _id')
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching User', err }))
})

router.post('/new', (req, res) => {

    const { wave, description, title } = req.body, writtenBy = req.user.id


    Comment
        .create({ wave, description, title, writtenBy })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving Comment', err }))
})

router.put('/edit/:comment_id', (req, res) => {

    Comment
        .findByIdAndUpdate(req.params.comment_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing Comment', err }))
})

router.post('/delete/:comment_id', (req, res) => {

    Comment
        .findByIdAndRemove(req.params.comment_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving Comment', err }))
})

module.exports = router