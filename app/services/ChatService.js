const { initialCard, openDialog, openSequentialDialog, openTicketsDialog } = require('../utils/widgets')
const { welcomeText } = require('../utils/constants')
const TicketService = require('../services/TicketService');
const { fetchAreaNegocioItems } = require('../utils/mainfunctions');

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
        try {

          const areaNegocioItems = await fetchAreaNegocioItems();
          const stepTwo = await openSequentialDialog(event, areaNegocioItems);
          res.send(stepTwo);

        } catch (error) {

          console.error(error);
          res.status(500).send("Erro ao processar a solicitação");
          
        }
      }

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