const Flight = require('../models/flight');

function create(req, res) {
    // console.log("calling create");
    // console.log(req.params.id);
    Flight.findById(req.params.id, function(error, movie){
        flight.destinations.push(req.body);
        flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`);
        });
    });
}

module.exports = {
    create
};