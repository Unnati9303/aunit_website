const mongoose = require("mongoose")

let contactSchema = mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    service:String,
    message:String  
})

let contact = mongoose.model('Contact',contactSchema)

module.exports = contact