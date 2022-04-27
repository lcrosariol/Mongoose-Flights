// const res = require('express/lib/response');
//import the flight Schema, in order to create the flight object
const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

function index(req, res) {
    Flight.find({}, function(err, flights) {
        if (err) return res.redirect('/');
        res.render('flights/index', {flights});
        });
}
// when the user visits 
// http://localhost:3000/flights/view
function newFlight(req, res) {
    res.render('flights/new');
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets){
        res.render('flights/show', {title: 'Flight Details', flight, tickets});
    });
});
}

function create(req, res) {
    if (req.body.departs === '') delete req.body.departs;   
    Flight.create(req.body);
    res.redirect('flights');
}

    //return the user to the index page
    



module.exports = {
    index,
    create,
    new: newFlight, 
    show
};