const mongoose = require('mongoose')

module.exports = {
	customMiddleware: (req, res, next) => next(),
	checkLoggedIn: (req, res, next) => (req.isAuthenticated() ? next() : res.status(401).json({ errorMsg: 'Log in to continue' })),
	checkRole: (...rolesArray) => (req, res, next) =>
		rolesArray.includes(req.session.user.role) ? next() : res.status(401).json({ errorMsg: 'You cannot access here' }),
	checkMongoId: (req, res, next) =>
		mongoose.Types.ObjectId.isValid(req.params.wave_id) ? next() : res.status(400).json({ status: 400, message: 'Wrong ID format' }),
}
