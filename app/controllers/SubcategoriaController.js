const subcategoriaService = require('../services/SubcategoriaService');

class SubcategoriaController {
    async getAll(req, res) {
        try {
            const subcategorias = await subcategoriaService.getAll();
            res.status(200).json({ "data": subcategorias });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new SubcategoriaController();