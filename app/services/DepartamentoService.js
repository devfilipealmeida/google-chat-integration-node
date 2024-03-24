const { Departamento } = require('../models')

class DepartamentoService {
    async getAll(selectedAreaNegocio) {
        const departamentos = await Departamento.findAll({
            where: {
                Area_Negocio: selectedAreaNegocio,
            },
            attributes: ['Area_Negocio', 'Departamento']
        });

        const items = departamentos.map(departamento => ({
            text: departamento.Departamento,
            value: departamento.Departamento,
            selected: false
            }));
    
            return items;
        }
}

module.exports = new DepartamentoService();