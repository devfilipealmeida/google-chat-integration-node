const appService = require('../services/AppService');

class AppController {
    async getAll(req, res) {
        const codFluxo = req.params.codFluxoParam
        try {
            const slas = await appService.getAll(codFluxo);
            res.status(200).json({ "data": slas });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new AppController();