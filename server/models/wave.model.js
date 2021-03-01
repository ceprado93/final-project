const mongoose = require('mongoose')
const Schema = mongoose.Schema

const waveSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: [{
        url: String,
        description: String,
        title: String
    }],
    location: {
        type: String,
        required: true
    },    //PREGUNTAR A TEO SI HACE FALTA LAT LONG
    type: {
        type: String,
        enum: ['Beachbreak', 'Pointbreak', 'Slab', 'A-frame']
    },
    seaBed: {
        type: String,
        enum: ['Sand', 'Rocks', 'Sand and rocks', 'Reef']
    },
    swellDirections: {
        type: Number,
        min: 0,
        max: 359
    },
    windDirections: {
        type: Number,
        min: 0,
        max: 359
    },
    swellRange: String,
    swellConsistency: Number,
    crowd: {
        type: String,
        enum: ['Empty', 'Fairly crowded', 'Full']
    },
    quality: Number,
    level: {
        type: String,
        enum: ['Beginners wave', 'All surfers', 'Experienced surfers', 'Pros'],
        required: true
    },
    tide: String,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

const Wave = mongoose.model('Wave', waveSchema)
module.exports = Wave

