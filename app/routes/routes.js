const express = require('express');
const router = express.Router();
const TicketController = require('../controllers/TicketController');
const ChatController = require('../controllers/ChatController');
const AreaNegocioController = require('../controllers/AreaNegocioController');

router.get('/', (req, res) => TicketController.getTickets(req, res));
router.post('/', (req, res) => TicketController.createTicket(req, res));
router.post('/chat', (req, res) => ChatController.getChat(req, res));


// Área Negócio
router.get('/areas', (req, res) => AreaNegocioController.getAll(req, res));


module.exports = router;