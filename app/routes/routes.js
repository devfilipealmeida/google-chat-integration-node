const express = require('express');
const router = express.Router();
const TicketController = require('../controllers/TicketController');
const ChatController = require('../controllers/ChatController');
const AreaNegocioController = require('../controllers/AreaNegocioController');
const DepartamentoController = require('../controllers/DepartamentoController');
const UnidadeController = require('../controllers/UnidadeController');
const SubcategoriaController = require('../controllers/SubcategoriaController');
const AssuntoController = require('../controllers/AssuntoController');
const AppController = require('../controllers/AppController');
router.get('/', (req, res) => TicketController.getTickets(req, res));
router.post('/', (req, res) => TicketController.createTicket(req, res));
router.post('/chat', (req, res) => ChatController.getChat(req, res));


// Áreas de Negócio
router.get('/areas', (req, res) => AreaNegocioController.getAll(req, res));

// Departamentos
router.get('/departamentos', (req, res) => DepartamentoController.getAll(req, res));

// Unidades
router.get('/unidades', (req, res) => UnidadeController.getAll(req, res));

// Subcategorias
router.get('/subcategorias', (req, res) => SubcategoriaController.getAll(req, res));

// Assuntos
router.get('/assuntos', (req, res) => AssuntoController.getAll(req, res));



// sla
router.get('/sla/:codFluxoParam', (req, res) => AppController.getAll(req, res));
module.exports = router;