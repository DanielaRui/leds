const express = require('express');
const router = express.Router();
const ledsControler = require('../controllers/ledsControler');

router.post('/', ledsControler.addLed);
router.get('/', ledsControler.getLeds);

router.put('/:nombre', ledsControler.updateLed);


module.exports = router;