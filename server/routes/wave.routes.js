const express = require('express')
const router = express.Router()
const Wave = require('../models/wave.model')
const { checkMongoId, checkLoggedIn } = require('./../middlewares')

router.get('/', (req, res) => {
	Wave.find()
		.then(response => res.json(response))
		.catch(err => res.status(500).json({ code: 500, message: 'Error fetching Wave', err }))
})

router.get('/:region/details', (req, res) => {
	Wave.find({ region: req.params.region })
		.sort({ title: 1 })
		.then(response => res.json(response))
		.catch(err => res.status(500).json({ code: 500, message: 'Error fetching Wave', err }))
})

router.get('/:continent/info', (req, res) => {
	Wave.find({ continent: req.params.continent })
		.then(response => res.json(response))
		.catch(err => res.status(500).json({ code: 500, message: 'Error fetching Wave', err }))
})

router.get('/:region', (req, res) => {
	Wave.find({ continent: req.params.region })
		.select('region continent')
		.sort({ region: 1 })
		.then(response => res.json(response))
		.catch(err => res.status(500).json({ code: 500, message: 'Error fetching Wave', err }))
})

router.get('/details/:wave_id', checkMongoId, (req, res) => {
	Wave.findById(req.params.wave_id)
		.then(response => res.json(response))
		.catch(err => res.status(500).json({ code: 500, message: 'Error fetching Wave', err }))
})

router.post('/new', checkLoggedIn, (req, res) => {
	const {
			title,
			description,
			region,
			continent,
			latitude,
			longitude,
			imageUrl,
			imageAuthor,
			type,
			seaBed,
			swellDirections,
			windDirections,
			swellRange,
			bestSeason,
			crowd,
			quality,
			level,
			tide,
		} = req.body,
		createdBy = req.session.user._id
	const location = {
		type: 'Point',
		coordinates: [latitude, longitude],
	}
	const images = {
		url: imageUrl,
		title: imageAuthor,
	}

	Wave.create({
		title,
		description,
		region,
		createdBy,
		continent,
		type,
		seaBed,
		swellDirections,
		windDirections,
		swellRange,
		bestSeason,
		crowd,
		quality,
		level,
		tide,
		location,
		images,
	})
		.then(response => res.json(response))
		.catch(err => res.status(500).json({ code: 500, message: 'Error saving Wave', err }))
})

router.put('/edit', (req, res) => {
	const {
		title,
		id,
		description,
		region,
		continent,
		latitude,
		longitude,
		imageUrl,
		imageAuthor,
		type,
		seaBed,
		swellDirections,
		windDirections,
		swellRange,
		bestSeason,
		crowd,
		quality,
		level,
		tide,
	} = req.body
	const location = {
		type: 'Point',
		coordinates: [latitude, longitude],
	}
	const images = {
		url: imageUrl,
		title: imageAuthor,
	}

	Wave.findByIdAndUpdate(id, {
		title,
		description,
		region,
		continent,
		type,
		seaBed,
		swellDirections,
		windDirections,
		swellRange,
		bestSeason,
		crowd,
		quality,
		level,
		tide,
		location,
		images,
	})
		.then(response => res.json(response))
		.catch(err => res.status(500).json({ code: 500, message: 'Error editing Wave', err }))
})

router.put('/accept/:wavedetails', (req, res) => {
	const id = req.params.wavedetails,
		isAccepted = true

	Wave.findByIdAndUpdate(id, { isAccepted })
		.then(response => {
			res.json(response)
		})
		.catch(err => res.status(500).json({ code: 500, message: 'Error editing Wave', err }))
})

router.delete('/delete/:wave_id', (req, res) => {
	Wave.findByIdAndRemove(req.params.wave_id)
		.then(response => res.json(response))
		.catch(err => res.status(500).json({ code: 500, message: 'Error saving Wave', err }))
})

module.exports = router
