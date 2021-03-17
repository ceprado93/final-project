const express = require('express')
const router = express.Router()
const Comment = require('../models/comment.model')
const User = require('../models/user.model')
const { checkLoggedIn } = require('./../middlewares')

router.get('/', (req, res) => {
	Comment.find()
		.then(response => res.json(response))
		.catch(err => res.status(500).json({ code: 500, message: 'Error fetching Comment', err }))
})

router.get('/:waveid/comment', (req, res) => {
	Comment.find({ wave: req.params.waveid })
		.then(response => res.json(response))
		.catch(err => res.status(500).json({ code: 500, message: 'Error fetching Comment', err }))
})

router.get('/:userId/mycomment', (req, res) => {
	Comment.find({ writtenBy: req.params.userId })
		.populate('wave', { title: 1, _id: 0 })
		.then(response => res.json(response))
		.catch(err => res.status(500).json({ code: 500, message: 'Error fetching Comment', err }))
})

router.get('/users', (req, res) => {
	User.find()
		.select('username _id')
		.then(response => res.json(response))
		.catch(err => res.status(500).json({ code: 500, message: 'Error fetching User', err }))
})

router.post('/new', checkLoggedIn, (req, res) => {
	const { wave, description, title } = req.body,
		writtenBy = req.session.user.id

	Comment.create({ wave, description, title, writtenBy })
		.then(response => res.json(response))
		.catch(err => res.status(500).json({ code: 500, message: 'Error saving Comment', err }))
})

router.put('/edit/:comment_id', checkLoggedIn, (req, res) => {
	Comment.findByIdAndUpdate(req.params.comment_id, req.body)
		.then(response => res.json(response))
		.catch(err => res.status(500).json({ code: 500, message: 'Error editing Comment', err }))
})

router.put('/accept/:commentdetails', (req, res) => {
	const id = req.params.commentdetails,
		isAccepted = true

	Comment.findByIdAndUpdate(id, { isAccepted })
		.then(response => {
			res.json(response)
		})
		.catch(err => res.status(500).json({ code: 500, message: 'Error editing Comment', err }))
})

router.delete('/delete/:comment_id', checkLoggedIn, (req, res) => {
	Comment.findByIdAndRemove(req.params.comment_id)
		.then(response => res.json(response))
		.catch(err => res.status(500).json({ code: 500, message: 'Error saving Comment', err }))
})

module.exports = router
