module.exports = app => {

    // Base URLS
    app.use('/api/wave', require('./wave.routes.js'))
    app.use('/api/auth', require('./auth.routes.js'))
    app.use('/api/profile', require('./profile.routes.js'))
}