const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema({
    itemOwner: { type: String, required: true },
    itemName: {type: String, required: true }, 
    itemInfo: {type: String, required: false},
    itemLocation: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Location'
    },
    itemDestination: {type: mongoose.Schema.Types.ObjectId,
        ref:'Location'},
    itemQuantity: {type: Number, required: true}
})

const Inventory = mongoose.model('Inventory', inventorySchema)

module.exports = Inventory
