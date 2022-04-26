const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {type: String, enum: ['KAUS', 'KDFW', 'KDEN', 'KLAX', 'KSAN']},
    arrival: {type: Date},
    }, {
        timestamps: true
    });

var flightSchema = new Schema({
    airline: {
        type: String, 
        enum: ['American', 'Southwest', 'United'],
    },
    airport: {
        type: String, 
        enum: ['KAUS', 'KDFW', 'KDEN', 'KLAX', 'KSAN'],
        default: 'KDEN',
    },
    flightNo: {
        type: Number, 
        min: 10, 
        max: 9999,
    },
    departs: {
        type: Date, 
        default: function() {
            let date = new Date();
            date.setFullYear(date.getFullYear()+ 1);
            return date;
        }
    }, 
    destinations: [destinationSchema], 
    }, {
      timestamps: true,  
});




//compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);