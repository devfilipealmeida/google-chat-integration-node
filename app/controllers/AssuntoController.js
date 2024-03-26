const assuntoService = require('../services/AssuntoService');

class AssuntoController {
    async getAll(req, res) {
        try {
            const assuntos = await assuntoService.getAll();
            res.status(200).json({ "data": assuntos });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new AssuntoController();