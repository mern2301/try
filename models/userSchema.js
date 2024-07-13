const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: { 
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    telephone:{
        type: String,
        required: true
    },
    addressOne: String,
    city: String,
    postCode: String,
    division: String,
    district: String,
    password: {
        type: String, 
        required: true
    },
    verified:{
        type: Boolean,
        default: false
    },
    role:{
        type: String,
        default: "member",
        enum: ["member", "admin", "merchant"]
    },
    token: String

})

module.exports = mongoose.model('UserList', userSchema)