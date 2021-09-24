const mongoose = require('mongoose')

const exportsSchema = new mongoose.Schema({
    itemOrigin: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Inventory'
    },    
    itemDestination: { type: String },
    itemQuantity: {type: Number, required: true}
})

const Exports = mongoose.model('Exports', exportsSchema)

module.exports = Exports