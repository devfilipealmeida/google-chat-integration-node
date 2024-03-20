const ticketService = require('../services/TicketService');

class TicketController {
    async getTickets(req, res) {
        try {
                const tickets = await ticketService.getAllTickets();
                res.status(200).json({ "data": tickets });
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        }

    async createTicket(req, res) {
        const data = req.body;

        try {
            const newTicket = await ticketService.newTicket(data)
            res.status(201).json(newTicket);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new TicketController();

