const { createMessage } = require("../utils/functions")

class ChatService {
  async getChat(req, res) {
    const event = req.body;
    let defaultMsEpoch = defaultDate.getTime();
    if (req.body.type === 'ADDED_TO_SPACE' && req.body.space.type === 'DM') {
      let text = 'Olá, obrigado por me adicionar. A partir de agora vou te auxiliar durante a abertura e visualização de Tickets. Basta me enviar uma mensagem!'
      res.json({ text });
    } else if (req.body.type === 'MESSAGE' &&
      req.body.space.type === 'DM') {
      res.json({
        "cardsV2": [{
          "cardId": "addTicket",
          "card": {
            "header": {
              "title": "App Tickets",
              "subtitle": "Escolha uma opção:",
              "imageUrl": "https://www.appsheet.com/Content/img/appicons/sales-crm.png",
              "imageType": "SQUARE",
              "imageAltText": "Avatar for the card header."
            },
            "sections": [
              {
                "widgets": [{
                  "buttonList": {
                    "buttons": [
                      {
                        "text": "+ Novo Ticket",
                        "onClick": {
                          "action": {
                            "function": "openDialog",
                            "interaction": "OPEN_DIALOG"
                          }
                        }
                      },
                      {
                        "text": "Ver meus Tickets",
                        "onClick": {
                          "action": {
                            "function": "openDialog",
                            "interaction": "OPEN_DIALOG"
                          }
                        }
                      }
                    ]
                  }
                }]
              }
            ]
          }
        }]
      });
    } else if (event.type === "CARD_CLICKED") {

      if (event.common.invokedFunction === "openDialog") {
        openDialog(event);
      };

      function openDialog(event) {
        res.json({
          "action_response": {
            "type": "DIALOG",
            "dialog_action": {
              "dialog": {
                "body": {
                  "sections": [
                    {
                      "header": "Novo Ticket",
                      "widgets": [
                        {
                          "dateTimePicker": {
                            "name": "appointment_time",
                            "label": "Book your appointment at:",
                            "type": "DATE_AND_TIME",
                            "valueMsEpoch": defaultMsEpoch
                          }
                        },
                        {
                          "textInput": {
                            "label": "Nome",
                            "type": "SINGLE_LINE",
                            "name": "nome"
                          }
                        },
                        {
                          "textInput": {
                            "label": "Matrícula",
                            "type": "SINGLE_LINE",
                            "name": "matricula"
                          }
                        },
                        {
                          "textInput": {
                            "label": "Telefone",
                            "type": "SINGLE_LINE",
                            "name": "telefone"
                          }
                        },
                        {
                          "buttonList": {
                            "buttons": [
                              {
                                "text": "Proximo",
                                "onClick": {
                                  "action": {
                                    "function": "openSequentialDialog"
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            }
          }
        });
      };
    }
  };
}

module.exports = new ChatService();