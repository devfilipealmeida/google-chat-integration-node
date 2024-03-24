const { Subcategoria } = require('../models')
const Sequelize = require('sequelize');

class SubcategoriaService {
    async getAll() {
        const subcategorias = await Subcategoria.findAll({
            attributes: ['Descricao', 'Categoria']
        });

        const items = subcategorias.map(subcategoria => ({
        text: subcategoria.Descricao,
        value: subcategoria.Categoria,
        selected: false
        }));

        return items;
    }
}

module.exports = new SubcategoriaService();