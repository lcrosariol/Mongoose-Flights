const Flight = require('../models/flight');

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All Flights', flights });
        });
}
// when the user visits 
// http://localhost:3000/flights/view
function newFlight(req, res) {
    const newFlight = new Flight();
    // //obtain the default date
    const dt = newFlight.departs;
    // // //format the date for the value attribute of the input
    let departsDate = dt.toISOString().slice(0, 16);
    res.render('flights/new', { title: 'Add Flight', departsDate });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', { title: 'Flight Details', flight });
    });
}

function create(req, res) {
//   if (req.body.flightNo) {  
    const flight = new Flight(req.body);
    flight.save(function(err){
        if(err) return res.render('flights/new');
        console.log(flight);
        res.redirect('/flights');
    });
    
    //return the user to the index page
    
}



module.exports = {
    index,
    create,
    new: newFlight, 
    show
};