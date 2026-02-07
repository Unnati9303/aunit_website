const mongoose = require("mongoose")

let SubscribeSchema = mongoose.Schema({
    email:String
})

let Subscribe = mongoose.model('Subscribe',SubscribeSchema)

module.exports = Subscribe