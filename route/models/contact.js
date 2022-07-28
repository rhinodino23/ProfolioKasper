const mongoose = require('mongoose');
const router = require('../pages');

var contactSchema = new mongoose.Schema({
    fname:{
        type: String
    },
    lname:{
        type: String
    },
    email:{
        type: String
    },
    commentSection:{
        type: String
    } 
})

module.exports = mongoose.model('Contact', contactSchema)