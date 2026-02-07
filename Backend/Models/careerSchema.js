const mongoose = require("mongoose")

let careerSchema = mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    phone:String,
    position:String,
    linkdin:String,
    github:String,
    resume:String,
})

let career = mongoose.model('Career',careerSchema)

module.exports = career