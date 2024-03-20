const { Ticket } = require('../models')

class TicketService {
    async getAllTickets() {
        const tickets = await Ticket.findAll();
        return tickets;
    }

    async newTicket(data) {
        console.log(data)
        // const newTicket = await Ticket.create({
        //     "id": "aghsghgsh",
        //     "cod_fluxo": 1,
        //     "status": "Aberto",
        //     "abertura": null,
        //     "nome": null,
        //     "departamento": null,
        //     "email_solicitante": null,
        //     "hub": null,
        //     "unidade": null,
        //     "criticidade": null,
        //     "categoria": null,
        //     "subcategoria": null,
        //     "assunto": null,
        //     "descricao": null,
        //     "anexo": null,
        //     "ticket_glpi": null,
        //     "outros_area_negocio": null,
        //     "novo_usuario": null,
        //     "usuario_modelo": null,
        //     "area_negocio": null,
        //     "centro_custo": null,
        //     "cpf": null,
        //     "cargo": null,
        //     "tipo_usuario": null,
        //     "telefone": null,
        //     "empresa_colab_cadastrado": null,
        //     "matricula": null,
        //     "sigla_cp": null,
        //     "registro_cp": null,
        //     "matricula_senior": null,
        //     "email_executor": null,
        //     "aprovador_sap": null,
        //     "executor": null,
        //     "cancelado_por": null,
        //     "finalizado_por": null,
        //     "resposta_chamado": null,
        //     "anexo_resposta": null,
        //     "data_atual": null,
        //     "grupo": null,
        //     "sla": null,
        //     "st_sla": null,
        //     "st_sla_corrido": null,
        //     "ct_tempo_corrido": null
        // });
        // return newTicket;
    }
}

module.exports = new TicketService();