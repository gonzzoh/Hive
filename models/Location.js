const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    locationName: {type: String, required: true }, 
    locationAddress: {type: String, required: true },
    locationInventory: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Inventory'
        }
    ]
})

const Location = mongoose.model('Location', locationSchema)

module.exports = Location