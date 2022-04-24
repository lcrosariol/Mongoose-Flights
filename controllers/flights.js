const Flight = require('../models/flight');

function index(req, res) {
    Flight.find({}, function(err, flights){
        res.render('flights/index', {
            flight
        });
    });
}

function newFlight(req, res) {
    res.render('flights/new');
}

function create (req, res) {
    req.body.departs = !!req.body.departs;
    if (req.body.flightNo) {
        const flight = new Flight(req.body);
        flight.save(function(error){
            if (error) {
                return res.render('flights/new');
            }
            res.redirect('flights');
        });
    }

}

module.exports = {
    index: index,
    create,
    new: newFlight

}