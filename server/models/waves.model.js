const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wavesSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    image:{
        type:Array,
        // default: //TO DO
    } ,
    location: {
        type:String, 
        required:true
    },    //PREGUNTAR A TEO SI HACE FALTA LAT LONG
    type: {
        type:String,
        enum:['beachbreak','pointbreak','slab']
    },
    seaBed: {
        type: String,
        enum: ['sand','rocks','sands and rocks','reef']
    },
    swellDirections: {
        type:Number,
        min:0,
        max:359
    },
    windDirections:{
        type:Number,
        min:0,
        max:359
    },
    swellRange:Number,
    swellConsistency:Number,
    crowd:{
        type:String,
        enum:['empty','fairly crowded','full']
    },
    rating:Number,
    level:{
        type:String,
        enum:['All the surfers','Experience surfers','Profesional surfers'],
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }    
}, {
    timestamps: true
})

const Waves = mongoose.model('Waves', wavesSchema)
module.exports = Waves

