const { TicketTask, TicketTaskStatus, Ticket } = require('../models')
const Sequelize = require('sequelize');

class AppService {
    async getAll(codFluxo) {
        const slaValue = await TicketTask.findOne({
            where: {
                cod_fluxo: codFluxo
            },
        })

        console.log(slaValue)

        return slaValue;
    }
}

module.exports = new AppService();