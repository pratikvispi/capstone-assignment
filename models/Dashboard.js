const mongoose = require('mongoose');

const Dschema = new mongoose.Schema({
    rollno:Number,
    name:String,
    age:Number,    
    symptoms: String,       
    psr: String,
    date:{
        type : Date,
        default : Date.now
    }

});

// modelname :Dashboard
// Schema is  : Dschema
const dashData = mongoose.model('dashData' , Dschema);

module.exports = dashData;