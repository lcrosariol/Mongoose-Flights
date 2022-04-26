const Flight = require('../models/flight');

function create(req, res) {
    // console.log("calling create");
    console.log(req.params.id);
    Flight.findById(req.params.id, function(error, flight){
        flight.destinations.push(req.body);
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}
// function createDestination(req, res) {
//     Flight.findById(req.params.id, function(err, flight){
//         res.render('flights/destinations', {flight});
//     });
// }

module.exports = {
    create
    // createDestination
};