const { Subcategoria } = require('../models')
const Sequelize = require('sequelize');

class SubcategoriaService {
    async getAll(selectedCategory) {
        const subcategorias = await Subcategoria.findAll({
            where: {
                Categoria: selectedCategory
            },
            attributes: ['Descricao', 'Categoria']
        });

        const items = subcategorias.map(subcategoria => ({
        text: subcategoria.Descricao,
        value: subcategoria.Descricao,
        selected: false
        }));

        return items;
    }
}

module.exports = new SubcategoriaService();