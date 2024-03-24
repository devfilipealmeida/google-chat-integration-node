const unidadeService = require('../services/UnidadeService');

class UnidadeController {
    async getAll(req, res) {
        try {
            const unidades = await unidadeService.getAll();
            res.status(200).json({ "data": unidades });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new UnidadeController();