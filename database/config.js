const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://daniela:danielaruiz@cluster1.8zhrttp.mongodb.net/salonDB?retryWrites=true&w=majority')
        console.log("Connect to MongoDB successfully")
    } catch (error) {
        console.log("Connect failed " + error.message )
    }
}

module.exports = connectDB