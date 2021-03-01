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
        title: String
    }],
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    },
    region: String,
    continent: String,
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
    bestSeason: {
        type: String,
        enum: ['winter', 'Spring', 'Summer', 'Autumn']
    },
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

