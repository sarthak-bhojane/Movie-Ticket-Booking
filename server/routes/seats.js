const express = require('express');
const router = express.Router();
const { selectSeat, releaseSeat } = require('../controllers/seatController');

router.post('/select', selectSeat);
router.post('/release', releaseSeat);

module.exports = router;
