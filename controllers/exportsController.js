const express = require('express');
const router = express.Router();
const db = require('../models/index.js')


/* ------------------------------- Index Route ------------------------------ */
router.get('/', (req,res) => {
        res.render('exports/exportsIndex.ejs')
})

module.exports = router;
