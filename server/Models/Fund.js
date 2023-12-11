const mongoose = require("mongoose");
const FundSchema = new mongoose.Schema({
    address :{
        type : String,
        required : true
    },
    title :{
        type : String,
        required : true
    },
    desc :{
        type : String,
        required : true
    }
});
module.exports = mongoose.model("Fund" , FundSchema);