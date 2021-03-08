
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
        default: 'https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg'
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin'],
    },
    favourites:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wave'
    }]
}, 
{
    timestamps: true
});
const User = mongoose.model("User", userSchema)
module.exports = User
