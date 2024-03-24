const { 
  initialCard, 
  openDialog, 
  openSequentialDialog, 
  openTicketsDialog, 
  cardAreaNegocio,
  cardStepTwo
} = require('../utils/widgets')
const { welcomeText } = require('../utils/constants')
const { 
  fetchAreaNegocioItems, 
  fetchDepartamentoItems, 
  fetchUnidadeItems, 
  fetchSubcategories
 } = require('../utils/mainfunctions');

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
        const selectedCategory = event.common.formInputs.categoria.stringInputs.value[0];
        const departmentItems = await fetchDepartamentoItems(selectedAreaNegocio);
        const unidadeItems = await fetchUnidadeItems(hubList);
        const subcategoriaItems = await fetchSubcategories(selectedCategory);
        
        const generateCard = await cardStepTwo(departmentItems, unidadeItems, subcategoriaItems);
        res.send(generateCard);
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