const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');



router.get('/', function(req, res, next) {
    res.redirect('/flights');
});
router.get('/flights/:id/destinations', destinationsCtrl.create);



router.post('/flights/:id/destinations', destinationsCtrl.create);
module.exports = router;
