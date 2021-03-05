module.exports = {
    customMiddleware: (req, res, next) => next(),
    checkRole: (...rolesArray) => (req, res, next) => rolesArray.includes(req.user.role) ? next() : res.status(401).json({ errorMsg: 'You cannot access here' })
}