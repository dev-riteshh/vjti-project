const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const StartupUser = new Schema({
    startupname : {
        type : String,
        required : true
    },
    foundername : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true  
    },
    website : {
        type : String,
        required : true  
    },
    location : {
        type : String,
        required : true  
    }
})


module.exports = mongoose.model('Startup',StartupUser)