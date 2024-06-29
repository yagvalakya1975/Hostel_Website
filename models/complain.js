// const { name } = require("ejs");
// const { text } = require("express");
const mongoose = require('mongoose');

const ComplainSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
    },
    phone : {
        type : Number,
        required : true,
    },
    room : {
        type : String,
        required : true,
    },
    subject : {
        type : String,
        required : true,
    },
    body : {
        type : String,
        required : true,
    }

},
{timestamps : true}
);



const Complain = new mongoose.model("Complain" , ComplainSchema);

module.exports = Complain;
