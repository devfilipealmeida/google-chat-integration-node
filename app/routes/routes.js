const express = require('express');
const router = express.Router();
const TicketController = require('../controllers/TicketController');
const ChatController = require('../controllers/ChatController');

router.get('/', (req, res) => TicketController.getTickets(req, res));
router.post('/', (req, res) => TicketController.createTicket(req, res));
router.post('/chat', (req, res) => ChatController.getChat(req, res));
module.exports = router;