const express = require('express');
const router = express.Router();
const TicketController = require('../controllers/TicketController');

router.get('/', (req, res) => TicketController.getTickets(req, res));
router.post('/', (req, res) => TicketController.createTicket(req, res));
module.exports = router;