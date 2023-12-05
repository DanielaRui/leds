const express = require("express");
const connectDB  = require('./database/config');
const app = express();
app.use(express.json());


connectDB();

app.use("/leds", require("./routes/leds"));

const server = app.listen(4000, () => {
    console.log("Servidor corriendo en el puerto 4000");
});

module.exports = app;