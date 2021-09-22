const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema({
    itemOwner: { type: String, required: true },
    itemName: {type: String, required: true }, 
    itemInfo: {type: String, required: false},
    itemLocation: {type: String, required: true },
    itemDestination: {type: String, required: false},
    itemQuantity: {type: Number, required: false}
})

const Inventory = mongoose.model('Inventory', inventorySchema)

module.exports = Inventory