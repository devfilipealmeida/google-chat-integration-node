const { initialCard, openDialog, openSequentialDialog, openTicketsDialog } = require('../utils/widgets')
const { welcomeText } = require('../utils/constants')
const TicketService = require('../services/TicketService');

class ChatService {
  async getChat(req, res) {
    const event = req.body;
    let defaultDate = new Date();
    let defaultMsEpoch = defaultDate.getTime();


    if (req.body.type === 'ADDED_TO_SPACE' && req.body.space.type === 'DM') {

      let text = welcomeText;
      res.json({ text });

    } else if (req.body.type === 'MESSAGE' &&
      req.body.space.type === 'DM') {

      const card = initialCard();
      res.send(card);

    } else if (event.type === "CARD_CLICKED") {

      if(event.common.invokedFunction === "openTicketsDialog") {
        // const userEmail = event.user.email;
        // const text = await TicketService.getAllByEmail(userEmail);

        const stepReport = openTicketsDialog();
        res.send(stepReport);
      }

      if (event.common.invokedFunction === "openDialog") {
        const stepOne = openDialog(event);
        res.send(stepOne);
      };

      if (event.common.invokedFunction === "openSequentialDialog") {
        const stepTwo = openSequentialDialog(event);
        res.send(stepTwo);
      };

      if (event.common.invokedFunction === "receiveDialog") {
        receiveDialog(event);
      };

      function receiveDialog(event) {
        console.log(event.common.formInputs)
      }
    }
  };
}

module.exports = new ChatService();