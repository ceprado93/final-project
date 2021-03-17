const express = require('express')
const router = express.Router()
const User = require('../models/user.model')

router.get('/', (req, res) => {
	User.findById(req.session.user._id)
		.then(response => res.json(response))
		.catch(err => res.status(500).json({ code: 500, message: 'Error fetching user', err }))
})

router.put('/edit/:id', (req, res) => {
	const avatar = req.body.avatar

	User.findByIdAndUpdate(req.params.id, { avatar })
		.then(response => res.json(response))
		.catch(err => res.status(500).json({ code: 500, message: 'Error fetching user', err }))
})

router.delete('/delete/:id', (req, res) => {
	User.findByIdAndRemove(req.session.user._id)
		.then(response => res.json(response))
		.catch(err => res.status(500).json({ code: 500, message: 'Error fetching user', err }))
})

module.exports = router
