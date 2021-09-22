const express = require('express');
const router = express.Router();
const db = require('../models/index.js')


/* ------------------------------- Index Route ------------------------------ */
router.get('/', (req,res) => {
    db.Locations.find({}, (err, allLocations) => {
        if(err) return console.log(err)
        res.render('locations/locationsIndex.ejs', {
            allLocations: allLocations
        });
    });
})


/* -------------------------------- New Route ------------------------------- */
router.get('/new', (req, res) => {
    res.render('locations/locationsNew.ejs');
  });
  
  
  /* ------------------------------- Show Route ------------------------------- */
  router.get('/:id', (req, res) => {
    db.Locations.findById(req.params.id)
      .populate('items')
      .exec((err, foundLocation) => {
        if (err) return console.log(err);
  
        console.log(foundLocation);
  
        res.render('location/locationShow.ejs', { location: foundLocation });
      })
  });
  
  
/* ------------------------------ Create Route ------------------------------ */
  router.post('/', (req, res) => {
    db.Locations.create(req.body, (err, createdLocation) => {
      if (err) return console.log(err);
  
  
      res.redirect('/locations');
    });
  });
  
  
/* ------------------------------ Delete Route ------------------------------ */
  router.delete('/:id', (req, res) => {
      db.Locations.findByIdAndRemove(req.params.id, (err) => {
          if (err) return console.log(err);
  
          res.redirect('/locations');
      });
  });
  


module.exports = router;