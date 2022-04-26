var express = require('express');
var router = express.Router();

var flightCtrl = require('../controllers/flights');
//get new flights
router.get('/new', flightCtrl.new);
//to process new data we send the data to the server 
router.post('/', flightCtrl.create);
//get the flights
router.get('/', flightCtrl.index);
router.get('/:id', flightCtrl.show);
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
