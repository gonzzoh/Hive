const express = require('express');
const router = express.Router();
const db = require('../models/index.js')


/* ------------------------------- Index Route ------------------------------ */
router.get('/', (req, res) => {
    db.Inventory.find({})
        .populate('itemLocation')
        .exec((err, allInventory) => {
            if (err) return console.log(err)
            console.log(allInventory);

            res.render('inventory/inventoryIndex.ejs', {
                allInventory: allInventory
            })
        })
})

/* -------------------------------- New Route ------------------------------- */
router.get('/new', (req, res) => {
    db.Locations.find({}, (err, allLocations) => {
        res.render('inventory/inventoryNew.ejs', { location: allLocations });
    })
})


/* ------------------------------- Show Route ------------------------------- */
//   router.get('/:id', (req, res) => {
//     db.Inventory.findById(req.params.id)
//       .exec((err, foundInventory) => {
//         if (err) return console.log(err);

//         console.log(foundInventory);

//         res.render('inventory/inventoryShow.ejs', { inventory: foundInventory });
//       })
//   });


/* ------------------------------ Create Route ------------------------------ */
router.post('/', (req, res) => {
    db.Inventory.create(req.body, (err, createdInventory) => {
        if (err) return console.log(err);


        res.redirect('/inventory');
    });
});


/* ------------------------------- Edit route ------------------------------- */
router.get('/:id/edit', (req, res) => {
    db.Inventory.findById(req.params.id)
        .populate("itemLocation")
        .exec((err, foundInventory) => {
            if (err) return console.log(err);
            db.Locations.find({}, (err, allLocations) => {
                res.render('inventory/inventoryEdit', { location: allLocations, inventory: foundInventory });
            })
        })
})


/* ------------------------------ Update route ------------------------------ */
router.put('/:id', (req, res) => {
    console.log(req.body)
    console.log("first")
    db.Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, foundInventory) => {
        if (err) return console.log(err)
        console.log(req.params.id)
        console.log(req.body)
        console.log(foundInventory)
        console.log("other string")
        res.redirect(`/inventory`)
    })
})


/* ------------------------------ Delete Route ------------------------------ */
router.delete('/:id', (req, res) => {
    db.Inventory.findByIdAndRemove(req.params.id, (err) => {
        if (err) return console.log(err);

        res.redirect('/inventory');
    });
});



module.exports = router;