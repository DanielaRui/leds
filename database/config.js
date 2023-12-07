const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://vivyanjoselin:6Demarzo@cluster0.ytjesa7.mongodb.net/salondb?retryWrites=true&w=majority')
        console.log("Connect to MongoDB successfully")
    } catch (error) {
        console.log("Connect failed " + error.message )
    }
}

module.exports = connectDB