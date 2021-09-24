const express = require('express');
const router = express.Router();
const db = require('../models/index.js')


/* ------------------------------- Index Route ------------------------------ */
router.get('/', (req, res) => {
    // db.Exports.find({})
    //     .populate('itemLocation')
    //     .exec((err, allExports) => {
    //         if (err) return console.log(err)
    //         console.log(allExports);

    //         res.render('exports/exportsIndex.ejs')
    //         , {
    //             allExports: allExports
    //         }
    //     })
    res.render('exports/exportsIndex.ejs')
})

/* -------------------------------- New Route ------------------------------- */
router.get('/new', (req, res) => {
    res.render('exports/exportsNew.ejs');
  });

  
module.exports = router;
