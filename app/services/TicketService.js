const { Ticket } = require('../models')

class TicketService {
    async getAllTickets() {
        const tickets = await Ticket.findAll();
        return tickets;
    }

    async newTicket(data) {
        const newTicket = await Ticket.create({
            "id": data.id,
            "status": data.status,
            "abertura": data.abertura,
            "nome": data.nome,
            "departamento": data.departamento,
            "email_solicitante": data.email_solicitante,
            "hub": data.hub,
            "unidade": data.unidade,
            "categoria": data.categoria,
            "subcategoria": data.subcategoria,
            "assunto": data.assunto,
            "descricao": data.descricao,
            "novo_usuario": data.novo_usuario,
            "area_negocio": data.area_negocio,
            "telefone": data.telefone,
            "matricula": data.matricula,
            "matricula_senior": data.matricula_senior
        });
        return newTicket;
    }
}

module.exports = new TicketService();