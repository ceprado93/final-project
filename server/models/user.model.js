
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        trim: true,
        set: nameValue => nameValue.charAt(0).toUpperCase() + nameValue.substring(1),
    },
    password: {
        type: String,
        required: true,
    },
    description: String,
    avatar: {
        type: String,
        default: '/images/logo_small_icon_only.png'
    },//TO DO
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin'],
    },
}, {
    timestamps: true
});
const User = mongoose.model("User", userSchema)
module.exports = User
