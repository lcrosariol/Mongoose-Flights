const express = require('express');
const router = express.Router();

const showCtrl = require('../controllers/destinations');

router.get('/', function(req, res, next) {
    res.redirect('/flights');
});



module.exports = router;
