const Ticket = require("../models/ticket");



module.exports = {
    create,
    new: newTicket
};
function newTicket(req, res) {
    res.render('tickets/new', { flightId: req.params.id });
}
// function createTicket(req, res) {
//     req.body.flight = req.params.id
//     Ticket.create(req.body, function(err, ticket){
//         res.redirect(`/flights/${req.params.id}/destinations`);
//     });
// }
    
function create(req, res){
    flightId = req.params.id;
    req.body.flight = flightId;
    Ticket.create(req.body, function(err, ticket){
        res.redirect(`/flights/${flightId}`);
    });
}