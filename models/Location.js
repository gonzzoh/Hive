const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    locationName: { type: String, required: true }, 
    locationAddress: { type: String, required: true },
    locationInventory: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Inventory'
        }
    ],
    locationExports: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Exports'
    }
})

const Location = mongoose.model('Location', locationSchema)

module.exports = Location