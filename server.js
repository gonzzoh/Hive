/* --------------------------- Require Statements --------------------------- */
require('dotenv').config()
const express = require('express');
const methodOverride = require('method-override');
const rowdy = require('rowdy-logger')
const inventoryController = require('./controllers/inventoryController.js');
const locationsController = require('./controllers/locationsController.js');
const exportsController = require('./controllers/exportsController.js')


/* ------------------------------ Configuration ----------------------------- */
const app = express();
const PORT = 4000;
const rowdyResults = rowdy.begin(app)
app.set('view engine', 'ejs');


/* ------------------------------- Middleware ------------------------------- */
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))


/* ------------------------------- Controllers ------------------------------ */
app.use('/inventory', inventoryController);
app.use('/locations', locationsController);
app.use('/exports', exportsController)


/* --------------------------------- Routes --------------------------------- */
app.get('/', (req, res) => {
    res.render('index.ejs');
})


/* ----------------------------- Starting Server ---------------------------- */
app.listen(process.env.PORT || PORT, () => {
    rowdyResults.print()
    console.log(`Your server is running on localhost:${PORT} 🚀`);
  })
  