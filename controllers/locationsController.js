const express = require('express');
const router = express.Router();
const db = require('../models/index.js')


/* ------------------------------- Index Route ------------------------------ */
router.get('/', (req, res) => {
  db.Locations.find({}, (err, allLocations) => {
    if (err) return console.log(err)
    res.render('locations/locationsIndex.ejs', {
      locations: allLocations
    });
  });
})


/* -------------------------------- New Route ------------------------------- */
router.get('/new', (req, res) => {
  res.render('locations/locationNew.ejs');
});


/* ------------------------------- Show Route ------------------------------- */
router.get('/:id', (req, res) => {
  db.Locations.findById(req.params.id)
    .exec((err, foundLocation) => {
      if (err) return console.log(err);
      console.log(foundLocation)
      db.Inventory.find({itemLocation: req.params.id}, (err, Inventory) => {
        res.render('locations/locationShow.ejs', { 
          location: foundLocation, 
          Inventory: Inventory 
        });
      })
    })
});

/* ------------------------------ Create Route ------------------------------ */
router.post('/', (req, res) => {
  db.Locations.create(req.body, (err, createdLocation) => {
    if (err) return console.log(err);
    res.redirect('/locations');
  });
});


/* ------------------------------- Edit route ------------------------------- */
router.get('/:id/edit', (req, res) => {
  db.Locations.findById(req.params.id, (err, foundLocation) => {
    if (err) return console.log(err);
    res.render('locations/locationEdit.ejs', {
      location: foundLocation
    })
  })
})


/* ------------------------------ Update route ------------------------------ */
router.put('/:id', (req, res) => {
  db.Locations.findByIdAndUpdate(req.params.id, req.body, (err, foundLocation) => {
    if (err) return console.log(err)
    console.log(req.params.id)
    console.log(req.body)
    console.log(foundLocation)
    res.redirect(`/locations`)
  })
})


/* ------------------------------ Delete Route ------------------------------ */
router.delete('/:id', (req, res) => {
  db.Locations.findByIdAndRemove(req.params.id, (err) => {
    if (err) return console.log(err);

    res.redirect('/locations');
  });
});



module.exports = router;