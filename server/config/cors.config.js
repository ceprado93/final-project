const cors = require('cors')

const whitelist = [process.env.DOMAIN]
// to do

const corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.includes(origin) !== -1 || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }

module.exports = app => app.use(cors(corsOptions))