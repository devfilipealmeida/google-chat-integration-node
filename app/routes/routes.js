const express = require('express');
const router = express.Router();
const TicketController = require('../controllers/TicketController');
const ChatController = require('../controllers/ChatController');
const AreaNegocioController = require('../controllers/AreaNegocioController');
const DepartamentoController = require('../controllers/DepartamentoController');

router.get('/', (req, res) => TicketController.getTickets(req, res));
router.post('/', (req, res) => TicketController.createTicket(req, res));
router.post('/chat', (req, res) => ChatController.getChat(req, res));


// Áreas de Negócio
router.get('/areas', (req, res) => AreaNegocioController.getAll(req, res));

// Departamentos
router.get('/departamentos', (req, res) => DepartamentoController.getAll(req, res));


module.exports = router;