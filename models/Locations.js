const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    locationName: {type: String, required: true }, 
    locationAddress: {type: String, required: true },
    locationInventory: {type: Array, required: true}
})

const Location = mongoose.model('Location', locationSchema)

module.exports = Location