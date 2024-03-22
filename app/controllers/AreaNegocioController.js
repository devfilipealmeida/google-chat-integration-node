const areaNegocioService = require('../services/AreaNegocioService');

class AreaNegocioController {
    async getAll(req, res) {
        try {
            const areas = await areaNegocioService.getAll();
            res.status(200).json({ "data": areas });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new AreaNegocioController();