const mongoose = require('mongoose')

const MONGODB_URI = process.env.DB_REMOTE || `mongodb://localhost/final-project`

mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(details => {
        const { name, client } = details.connections[0]
        console.log(`Connected to database "${name}" (URL: ${client.s.url})`)
    })
    .catch(err => console.error('Error connecting to Mongo', err))