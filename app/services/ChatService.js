const { 
  initialCard,
  openTicketsDialog,
  cardStepTwo,
  cardAreaNegocio,
  cardSelectAssunto,
} = require('../utils/widgets')
const { welcomeText } = require('../utils/constants')
const { 
  fetchAreaNegocioItems, 
  fetchDepartamentoItems, 
  fetchUnidadeItems, 
  fetchSubcategories,
  fetchAssunto,
  fetchCategoria,
  generateGroup
} = require('../utils/mainfunctions');
const ticketService = require('../services/TicketService')

class ChatService {
  constructor() {
    this.stepOneData = {};
    this.stepTwoData = {};
    this.stepThreeData = {};
    this.stepFourData = {};
  }

  async getChat(req, res) {
    const event = req.body;
    console.log(event);
    const areaNegocioItems = await fetchAreaNegocioItems();

    if (req.body.type === 'ADDED_TO_SPACE' && req.body.space.type === 'DM') {

      let text = welcomeText;
      res.json({ text });

    } else if (req.body.type === 'MESSAGE' &&
      req.body.space.type === 'DM') {

      const card = initialCard();
      res.send(card);

    } else if (event.type === "CARD_CLICKED") {
      console.log(event)

      if(event.common.invokedFunction === "openTicketsDialog") {

        const stepReport = openTicketsDialog();
        res.send(stepReport);
      }
      if(event.common.invokedFunction === "createNewTicket"){
          const categoriaItems = await fetchCategoria()
          const firstStep = await cardAreaNegocio(areaNegocioItems, categoriaItems);
          res.send(firstStep);
        }

        if(event.common.invokedFunction === "confirmed"){
          this.stepOneData = event.common.formInputs;
          // const selectedAreaNegocio = event.common.formInputs.area_negocio.stringInputs.value[0];
          // const hubList = event.common.formInputs.hub.stringInputs.value;
          const selectedCategory = event.common.formInputs.categoria.stringInputs.value[0];

          // const departmentItems = await fetchDepartamentoItems(selectedAreaNegocio);
          // const unidadeItems = await fetchUnidadeItems(hubList);
          const subcategoriaItems = await fetchSubcategories(selectedCategory);
          
          const generateStepTwo = await cardStepTwo(subcategoriaItems);
          res.send(generateStepTwo);
        }

        if(event.common.invokedFunction === "confirmedTwo"){
          this.stepTwoData = event.common.formInputs;
          const assuntoItems = await fetchAssunto(this.stepOneData.categoria.stringInputs.value[0], this.stepTwoData.Subcategoria.stringInputs.value[0]);
          
          const generateCardAssunto = await cardSelectAssunto(assuntoItems);
          res.send(generateCardAssunto);
        }

        if(event.common.invokedFunction === "openSalvar") {
          this.stepThreeData = event.common.formInputs;
          const group = await generateGroup(this.stepOneData.categoria.stringInputs.value[0], this.stepTwoData.Subcategoria.stringInputs.value[0])

          const saveData = {
            "status": "Em Aberto",
            "abertura": new Date().toISOString().replace('T', ' ').replace(/\.\d+Z$/, ''),
            "email_solicitante": event.user.email,
            "nome": event.user.displayName,
            "categoria": this.stepOneData.categoria.stringInputs.value[0],
            "subcategoria": this.stepTwoData.Subcategoria.stringInputs.value[0],
            "assunto": this.stepThreeData.Assunto.stringInputs.value[0],
            "descricao": event.common.formInputs.descricao.stringInputs.value[0],
            "grupo": group,
            "matricula": null,
            "matricula_senior": null           
          }

            let text = '';
            const data = await ticketService.newTicket(saveData)

            console.log(data)

            text = `O Ticket foi gerado com sucesso para ${event.user.displayName} 📌`
            
            res.json({ text })

        }
    }
  };

}

module.exports = new ChatService();