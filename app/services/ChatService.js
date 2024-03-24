const { initialCard, openDialog, openSequentialDialog, openTicketsDialog, cardAreaNegocio } = require('../utils/widgets')
const { welcomeText } = require('../utils/constants')
const { fetchAreaNegocioItems, fetchDepartamentoItems, fetchUnidadeItems } = require('../utils/mainfunctions');

class ChatService {
  async getChat(req, res) {
    const event = req.body;
    let defaultDate = new Date();
    let defaultMsEpoch = defaultDate.getTime();
    const areaNegocioItems = await fetchAreaNegocioItems();

    if (req.body.type === 'ADDED_TO_SPACE' && req.body.space.type === 'DM') {

      let text = welcomeText;
      res.json({ text });

    } else if (req.body.type === 'MESSAGE' &&
      req.body.space.type === 'DM') {

      const card = initialCard();
      res.send(card);

    } else if (event.type === "CARD_CLICKED") {

      if(event.common.invokedFunction === "openTicketsDialog") {

        const stepReport = openTicketsDialog();
        res.send(stepReport);
      }

      if(event.common.invokedFunction === "createNewTicket"){
        const cardArea = await cardAreaNegocio(areaNegocioItems);
        res.send(cardArea);
      }

      if(event.common.invokedFunction === "confirmed"){
        const selectedAreaNegocio = event.common.formInputs.area_negocio.stringInputs.value[0];
        const hubList = event.common.formInputs.hub.stringInputs.value;
        const departmentItems = await fetchDepartamentoItems(selectedAreaNegocio);
        const unidadeItems = await fetchUnidadeItems(hubList);
        
      }

      if(event.common.invokedFunction === "selectDepartament"){
        const cardArea = await cardAreaNegocio(areaNegocioItems);
        res.send(cardArea);
      }

      // if (event.common.invokedFunction === "openDialog") {
      //   const stepOne = openDialog(event);
      //   res.send(stepOne);
      // };

      // if (event) {
      //   console.log(event)
      // };

      // if (event.common.invokedFunction === "openSequentialDialog") {
      //   try {

      //     const areaNegocioItems = await fetchAreaNegocioItems();
      //     const stepTwo = await openSequentialDialog(event, areaNegocioItems);
      //     res.send(stepTwo);

      //   } catch (error) {

      //     console.error(error);
      //     res.status(500).send("Erro ao processar a solicitação");
          
      //   }
      // }

      // if (event.common.invokedFunction === "receiveDialog") {
      //   receiveDialog(event);
      // };

      // function receiveDialog(event) {
      //   console.log(event.common.formInputs)
      // }
    }
  };
}

module.exports = new ChatService();