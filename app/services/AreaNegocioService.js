const { tb_area_negocio } = require('../models')

class AreaNegocioService {
    async getAll() {
        const areasNegocio = await tb_area_negocio.findAll();

        const items = areasNegocio.map(area => ({
        text: area.Area,
        value: area.Area,
        selected: false
        }));

        return items;
    }
}

module.exports = new AreaNegocioService();