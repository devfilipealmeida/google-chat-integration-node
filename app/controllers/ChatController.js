const chatService = require('../services/ChatService');

class ChatController {
    async getChat(req, res) {
        await chatService.getChat(req, res);
        return;
    }
}

module.exports = new ChatController();