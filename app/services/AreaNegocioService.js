const { tb_area_negocio } = require('../models')

class AreaNegocioService {
    async getAll() {
        const listAll = await tb_area_negocio.findAll();
        return listAll;
    }
}

module.exports = new AreaNegocioService();