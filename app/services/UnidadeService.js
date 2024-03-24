const { Unidade } = require('../models')
const Sequelize = require('sequelize');

class UnidadeService {
    async getAll(hubList) {
        const unidades = await Unidade.findAll({
            where:{
                [Sequelize.Op.or]: hubList.map(hub => ({
                    HUB: hub
                }))
            },
            attributes: ['HUB', 'unidadeDeNegocio']
        });

        const items = unidades.map(unidade => ({
        text: unidade.unidadeDeNegocio,
        value: unidade.unidadeDeNegocio,
        selected: false
        }));

        return items;
    }
}

module.exports = new UnidadeService();