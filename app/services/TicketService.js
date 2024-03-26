const { Ticket } = require('../models')
const { generateRandomString } = require('../utils/mainfunctions');

class TicketService {
    async getAllTickets() {
        const tickets = await Ticket.findAll();
        return tickets;
    }

    async getAllByEmail(email) {
        let text = '';
        const tickets = await Ticket.findAndCountAll({
            where: {
                email_solicitante: email,
                status: 'Aberto',
            }
        });

        if (tickets.count <= 0) {
            text = 'Não há tickets abertos em seu nome';
        } else {
            text = `Você tem ${tickets.count} tickets abertos em seu nome`;
            return text;
        }
    }

    async newTicket(data) {
        let id = await generateRandomString(8);
        while (await Ticket.findOne({
            where: {
                id
            }
        })) {
            id = generateRandomString(8);
        }
        
        const newTicket = await Ticket.create({
            "id": id,
            "status": data.status,
            "abertura": data.abertura,
            "email_solicitante": data.email_solicitante,
            "nome": data.nome,
            "categoria": data.categoria,
            "subcategoria": data.subcategoria,
            "assunto": data.assunto,
            "descricao": data.descricao,
            "grupo": data.grupo,
            "matricula": null,
            "matricula_senior": null,
        });
        return newTicket;
    }
}

module.exports = new TicketService();