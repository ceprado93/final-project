module.exports = app => {

    // Base URLS
    app.use('/api/coasters', require('./coasters.routes.js'))
    app.use('/api/auth', require('./auth.routes.js'))
}