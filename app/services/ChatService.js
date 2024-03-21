class ChatService {
  async getChat(req, res) {
    const event = req.body;
    let defaultDate = new Date();
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

      if (event.common.invokedFunction === "openSequentialDialog") {
        openSequentialDialog(event);
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
                            "name": "abertua",
                            "label": "Abertura",
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
                                "text": "Próximo",
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
      function openSequentialDialog(event) {
        res.json({
          "action_response": {
            "type": "DIALOG",
            "dialog_action": {
              "dialog": {
                "body": {
                  "sections": [
                    {
                      "widgets": [
                        {
                          "selectionInput": {
                            "name": "area_negocio",
                            "label": "Área de Negócio",
                            "type": "DROPDOWN",
                            "items": [
                              {
                                "text": "S",
                                "value": "small",
                                "selected": false
                              },
                              {
                                "text": "M",
                                "value": "medium",
                                "selected": true
                              },
                              {
                                "text": "L",
                                "value": "large",
                                "selected": false
                              },
                              {
                                "text": "XL",
                                "value": "extra_large",
                                "selected": false
                              }
                            ]
                          }
                        },
                        {
                          "selectionInput": {
                            "type": "MULTI_SELECT",
                            "label": "HUB",
                            "name": "hub",
                            "multiSelectMaxSelectedItems": 3,
                            "multiSelectMinQueryLength": 1,
                            "items": [
                              {
                                "value": "contact-1",
                                "text": "Contact 1",
                                "selected": false
                              },
                              {
                                "value": "contact-2",
                                "text": "Contact 2",
                                "selected": false
                              },
                              {
                                "value": "contact-3",
                                "text": "Contact 3",
                                "selected": false
                              },
                              {
                                "value": "contact-4",
                                "text": "Contact 4",
                                "selected": false
                              },
                              {
                                "value": "contact-5",
                                "text": "Contact 5",
                                "selected": false
                              }
                            ]
                          }
                        },
                        {
                          "selectionInput": {
                            "name": "categoria",
                            "label": "Categoria",
                            "type": "DROPDOWN",
                            "items": [
                              {
                                "value": "contact-1",
                                "text": "TASY",
                                "selected": false
                              },
                              {
                                "value": "contact-2",
                                "text": "MV",
                                "selected": false
                              },
                              {
                                "value": "contact-3",
                                "text": "SAP",
                                "selected": false
                              },
                              {
                                "value": "contact-4",
                                "text": "Rede/E-mail/Microsoft 365",
                                "selected": false
                              },
                              {
                                "value": "contact-5",
                                "text": "Sistema Sênior",
                                "selected": false
                              },
                              {
                                "value": "contact-5",
                                "text": "Cadastro",
                                "selected": false
                              }
                            ]
                          }
                        },
                        {
                          "textInput": {
                            "label": "Nº Ticket GLPI(Se houver)",
                            "type": "SINGLE_LINE",
                            "name": "glpi"
                          }
                        },
                        {
                          "buttonList": {
                            "buttons": [
                              {
                                "text": "Submit",
                                "onClick": {
                                  "action": {
                                    "function": "confirmDialogSuccess",
                                    "parameters": [
                                      {
                                        "key": "confirmDialogSuccess",
                                        "value": "confirmDialogSuccess"
                                      }
                                    ]
                                  }
                                }
                              }
                            ]
                          },
                          "horizontalAlignment": "END"
                        }
                      ]
                    }
                  ]
                }
              }
            }
          }
        });
      }
    }
  };
}

module.exports = new ChatService();