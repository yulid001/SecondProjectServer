const mongoose = require('mongoose');
const { stringify } = require('querystring');
const cors = require ('cors');

let userSchema = new mongoose.Schema({
    id : String,
    name : String,
    amail : String,
    street : String,
    city : String,
    zipcode : Number,
    tasks : [{id : Number, title : String, complited : Boolean}],
    posts : [{id : Number, title : String, body : String}]
});

module.exports = mongoose.model('users', userSchema);