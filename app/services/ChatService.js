const { initialCard, openDialog, openSequentialDialog } = require('../utils/widgets')
const { welcomeText } = require('../utils/constants')

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

      if (event.common.invokedFunction === "openDialog") {
        const stepOne = openDialog(event);
        res.send(stepOne);
      };

      if (event.common.invokedFunction === "openSequentialDialog") {
        const stepTwo = openSequentialDialog(event);
        res.send(stepTwo);
      };
    }
  };
}

module.exports = new ChatService();