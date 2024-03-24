function initialCard() {
    const cardHeader = {
        "title": "Helper",
        "subtitle": "Escolha uma opção:",
        "imageUrl": "https://uploaddeimagens.com.br/images/004/756/786/thumb/Logo_Kora.png?1710514563",
        "imageType": "SQUARE",
    }

    const cardSections = {
        "widgets": [{
            "buttonList": {
                "buttons": [
                    {
                        "text": "+ Novo Ticket",
                        "onClick": {
                            "action": {
                                "function": "createNewTicket",
                            }
                        }
                    },
                    {
                        "text": "Ver meus Tickets",
                        "onClick": {
                            "action": {
                                "function": "openTicketsDialog",
                                "interaction": "OPEN_DIALOG"
                            }
                        }
                    }
                ]
            }
        }]
    }

    return {
        cardsV2: [{
            cardId: "addTicket",
            card: {
                header: cardHeader,
                sections: [cardSections]
            }
        }]
    }
}

function cardAreaNegocio(areaNegocioItems) {
  const cardHeader = {
      "subtitle": "Para o cadastro, vou precisar dessas informações.",
  }

  const cardSections = {
      "widgets": [
        {
          selectionInput: {
            name: "area_negocio",
            label: "Área de Negócio",
            type: "DROPDOWN",
            items: areaNegocioItems,
          }
        },
        {
          selectionInput: {
            type: "MULTI_SELECT",
            label: "HUB",
            name: "hub",
            multiSelectMaxSelectedItems: 3,
            multiSelectMinQueryLength: 1,
            items: [
              {
                value: "CE",
                text: "CE",
                selected: false
              },
              {
                value: "CORPORATIVO",
                text: "CORPORATIVO",
                selected: false
              },
              {
                value: "DF-GO",
                text: "DF-GO",
                selected: false
              },
              {
                value: "ES",
                text: "ES",
                selected: false
              },
              {
                value: "MT-TO",
                text: "MT-TO",
                selected: false
              }
            ]
          }
        },
        {
          selectionInput: {
            name: "categoria",
            label: "Categoria",
            type: "DROPDOWN",
            items: [
              {
                value: "TASY",
                text: "TASY",
                selected: false
              },
              {
                value: "MV",
                text: "MV",
                selected: false
              },
              {
                value: "SAP",
                text: "SAP",
                selected: false
              },
              {
                value: "Rede/E-mail/Microsoft 365",
                text: "Rede/E-mail/Microsoft 365",
                selected: false
              },
              {
                value: "Sistema Sênior",
                text: "Sistema Sênior",
                selected: false
              },
              {
                value: "Cadastro",
                text: "Cadastro",
                selected: false
              }
            ]
          }
        },
        {
          buttonList: {
            buttons: [
              {
                text: "Confirmar",
                onClick: {
                  action: {
                    function: "confirmed"
                  }}
              }]
            }
        }
    ]
  }

  return {
      cardsV2: [{
          cardId: "selectInitialInfo",
          card: {
              header: cardHeader,
              sections: [cardSections]
          }
      }]
  }
}

function cardStepTwo(departmentItems, unidadeItems, subcategoriaItems) {
  const cardSections = {
      "widgets": [
        {
          selectionInput: {
            name: "Departamento",
            label: "Departamento",
            type: "DROPDOWN",
            items: departmentItems,
          }
        },
        {
          selectionInput: {
            type: "MULTI_SELECT",
            label: "Unidade de Negócio",
            name: "Unidade de Negócio",
            multiSelectMaxSelectedItems: 3,
            multiSelectMinQueryLength: 1,
            items: unidadeItems
          }
        },
        {
          selectionInput: {
            name: "Subcategoria",
            label: "Subcategoria",
            type: "DROPDOWN",
            items: subcategoriaItems
          }
        },
        {
          buttonList: {
            buttons: [
              {
                text: "Confirmar",
                onClick: {
                  action: {
                    function: "confirmed"
                  }}
              }]
            }
        }
    ]
  }

  return {
      cardsV2: [{
          cardId: "cardStepTwo",
          card: {
              sections: [cardSections]
          }
      }]
  }
}

function cardDepartamento(areaNegocioItems) {
  const cardHeader = {
      "subtitle": "Selecione um Departamento",
  }

  const cardSections = {
      "widgets": [
        {
          selectionInput: {
            name: "departamento",
            label: "Departamento",
            type: "DROPDOWN",
            items: areaNegocioItems,
          }
        },
        {
          buttonList: {
            buttons: [
              {
                text: "Confirmar",
                onClick: {
                  action: {
                    function: "selectDepartament"
                  }}
              }]
            }
        }
    ]
  }

  return {
      cardsV2: [{
          cardId: "addTicket",
          card: {
              header: cardHeader,
              sections: [cardSections]
          }
      }]
  }
}

function openTicketsDialog(event) {
  return {
    action_response: {
      type: "DIALOG",
      dialog_action: {
        dialog: {
          body: {
            sections: [
              {
                header: "Seus Tickets",
                widgets: [
                  {
                    textParagraph: {
                      text: "Você tem 2 Tickets em Aberto"
                    }
                  },
                  {
                    buttonList: {
                      buttons: [
                        {
                          text: "Ver no App",
                          onClick: {
                            action: {
                              function: "openSequentialDialog"
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
  }
};

function openDialog(event) {
    return {
      action_response: {
        type: "DIALOG",
        dialog_action: {
          dialog: {
            body: {
              sections: [
                {
                  header: "Novo Ticket",
                  widgets: [
                    {
                      textInput: {
                        label: "Nome",
                        type: "SINGLE_LINE",
                        name: "nome"
                      }
                    },
                    {
                      textInput: {
                        label: "Matrícula",
                        type: "SINGLE_LINE",
                        name: "matricula"
                      }
                    },
                    {
                      textInput: {
                        label: "Telefone",
                        type: "SINGLE_LINE",
                        name: "telefone"
                      }
                    },
                    {
                      buttonList: {
                        buttons: [
                          {
                            text: "Próximo",
                            onClick: {
                              action: {
                                function: "openSequentialDialog"
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
    }
  };

function openSequentialDialog(event, areaNegocioItems) {
    try {
      return {
        action_response: {
          type: "DIALOG",
          dialog_action: {
            dialog: {
              body: {
                sections: [
                  {
                    widgets: [
                      {
                        selectionInput: {
                          type: "MULTI_SELECT",
                          label: "HUB",
                          name: "hub",
                          multiSelectMaxSelectedItems: 3,
                          multiSelectMinQueryLength: 1,
                          items: [
                            {
                              value: "CE",
                              text: "CE",
                              selected: false
                            },
                            {
                              value: "CORPORATIVO",
                              text: "CORPORATIVO",
                              selected: false
                            },
                            {
                              value: "DF-GO",
                              text: "DF-GO",
                              selected: false
                            },
                            {
                              value: "ES",
                              text: "ES",
                              selected: false
                            },
                            {
                              value: "MT-TO",
                              text: "MT-TO",
                              selected: false
                            }
                          ]
                        }
                      },
                      {
                        selectionInput: {
                          name: "categoria",
                          label: "Categoria",
                          type: "DROPDOWN",
                          items: [
                            {
                              value: "contact-1",
                              text: "TASY",
                              selected: false
                            },
                            {
                              value: "contact-2",
                              text: "MV",
                              selected: false
                            },
                            {
                              value: "contact-3",
                              text: "SAP",
                              selected: false
                            },
                            {
                              value: "contact-4",
                              text: "Rede/E-mail/Microsoft 365",
                              selected: false
                            },
                            {
                              value: "contact-5",
                              text: "Sistema Sênior",
                              selected: false
                            },
                            {
                              value: "contact-5",
                              text: "Cadastro",
                              selected: false
                            }
                          ]
                        }
                      },
                      {
                        textInput: {
                          label: "Nº Ticket GLPI(Se houver)",
                          type: "SINGLE_LINE",
                          name: "glpi"
                        }
                      },
                      {
                        buttonList: {
                          buttons: [
                            {
                              text: "Enviar",
                              onClick: {
                                action: {
                                  function: "receiveDialog",
                                }
                              }
                            }
                          ]
                        },
                        horizontalAlignment: "END"
                      }
                    ]
                  }
                ]
              }
            }
          }
        }
      };
    } catch (error) {
      
    }
  }


module.exports = { initialCard, openDialog, openSequentialDialog, openTicketsDialog, cardAreaNegocio, cardStepTwo };