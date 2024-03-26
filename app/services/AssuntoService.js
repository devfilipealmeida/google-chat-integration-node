const { Assunto } = require('../models')
const Sequelize = require('sequelize');

class AssuntoService {
    async getAll(category, subcategory) {
        const assuntos = await Assunto.findAll({
            where: {
                Categoria: category,
                Subcategoria: subcategory,
            },
            attributes: ['Categoria', 'Subcategoria', 'Assunto']
        });

        const items = assuntos.map(assunto => ({
        text: assunto.Assunto,
        value: assunto.Assunto,
        selected: false
        }));

        return items;
    }
}

module.exports = new AssuntoService();