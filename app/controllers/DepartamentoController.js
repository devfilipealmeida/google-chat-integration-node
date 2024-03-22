const departamentoService = require('../services/DepartamentoService');

class DepartamentoController {
    async getAll(req, res) {
        try {
            const departamentos = await departamentoService.getAll();
            res.status(200).json({ "data": departamentos });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new DepartamentoController();