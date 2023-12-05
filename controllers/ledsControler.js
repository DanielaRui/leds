const Led = require("../models/Led");

exports.addLed = async (req, res) => {
  try {

    let led;
    led = new Led(req.body);
    await led.save();
    res.send(led);

  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error");
  }
};


exports.getLeds = async (req, res) => {
  try {
    let led = await Led.find();
    if (!led) {
      return res.send({ msg: ":b no hay" });
    }
    res.status(200).send(led);
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error");
  }
};



exports.updateLed = async (req, res) => {
  try {
    let nombre = req.params.nombre;
    const { Nombre, Estado} = req.body;
    let led = await Led.findOne({ Nombre: nombre });
    if (!led) {
      res.status(404).json({ msg: "hubo un error" });
    }
    led.Nombre = Nombre;
    led.Estado = Estado;

    led = await Led.findOneAndUpdate({Nombre: led.Nombre},led, {new: true});
    res.json(led);


  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};