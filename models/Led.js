const mongoose = require('mongoose');

const LedsSchema = mongoose.Schema({
    Nombre: {
        type: String,
        required: true 
    },
    Estado: {
        type: Number,
        required: true 
    }
}); 

module.exports = mongoose.model('Leds', LedsSchema);