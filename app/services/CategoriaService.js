const { Categoria } = require('../models')
const Sequelize = require('sequelize');

class CategoriaService {
    async getAll() {
        const categorias = await Categoria.findAll({
            attributes: ['descricao',]
        });

        const items = categorias.map(categoria => ({
        text: categoria.descricao,
        value: categoria.descricao,
        selected: false
        }));

        return items;
    }
}

module.exports = new CategoriaService();