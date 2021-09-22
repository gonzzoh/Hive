const express = require('express');
const router = express.Router();
const db = require('../models/index.js')


/* ------------------------------- Index Route ------------------------------ */
router.get('/', (req,res) => {
    db.Inventory.find({}, (err, allInventory) => {
        if(err) return console.log(err)
        res.render('inventory/inventoryIndex.ejs', {
            allInventory: allInventory
        })
    })
})


/* -------------------------------- New Route ------------------------------- */
router.get('/new', (req, res) => {
    db.Inventory.find({}, (err, allInventory) => {
        res.render('inventory/inventoryNew.ejs', { allInventory: allInventory });
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
    db.Inventory.findById(req.params.id, (err, foundInventory) => {
        if(err) return console.log(err);
        res.render('inventory/inventoryEdit', {
            inventory: foundInventory
        })
    })
})


/* ------------------------------ Update route ------------------------------ */
router.put('/:id', (req, res) => {
    db.Inventory.findByIdAndUpdate(req.params.id, req.body, (err, foundInventory) =>{
        if(err) return console.log(err)
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