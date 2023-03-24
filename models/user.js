const mongoose= require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    location : {
        type: String,
        required: true
    },
    startTime : {
        type: String,
        required: true
    },
    endTime : {
        type: String,
        required: true
    },
},{timestamps:true});

const userModel = mongoose.model("Event", userSchema);

module.exports = userModel;