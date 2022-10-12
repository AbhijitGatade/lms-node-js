var mongoose = require("mongoose");
var Schema = mongoose.Schema

var schema = new Schema({
    courseid: {type: String,required: true},
    name: {type: String,required: true},
    srno: {type: Number,required: true}
});
var Coursesection = mongoose.model("coursesections", schema);
module.exports = Coursesection;
