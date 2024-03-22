const { Departamento } = require('../models')

class DepartamentoService {
    async getAll() {
        const departamentos = await Departamento.findAll({
            attributes: ['Area_Negocio', 'Departamento']
        });
        return departamentos;
        }
}

module.exports = new DepartamentoService();