const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: String,
    airport: String,
    FlightNo: Number,
    departs: Date
},{
    timestamps : true
});

module.exports = mongoose.model('Flight', flightSchema);