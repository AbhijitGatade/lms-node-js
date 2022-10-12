var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var schema = new Schema({
    courseid: ({ type: String, required: true }),
    sectionid: ({ type: String, required: true }),
    name: ({ type: String, required: true }),
    description: ({ type: String, required: true }),
    srno: ({ type: Number, required: true }),
    vfrom: ({ type: String, required: true }),
    videocode: ({ type: String, required: true }),
});

var Coursevideo = mongoose.model("coursevideos", schema);

module.exports = Coursevideo;