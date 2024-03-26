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

function cardAreaNegocio(areaNegocioItems, categoriaItems) {
  const cardHeader = {
      "subtitle": "Para o cadastro, vou precisar dessas informações.",
  }

  const cardSections = {
      "widgets": [
        // {
        //   selectionInput: {
        //     name: "area_negocio",
        //     label: "Área de Negócio",
        //     type: "DROPDOWN",
        //     items: areaNegocioItems,
        //   }
        // },
        // {
        //   selectionInput: {
        //     type: "MULTI_SELECT",
        //     label: "HUB",
        //     name: "hub",
        //     multiSelectMaxSelectedItems: 3,
        //     multiSelectMinQueryLength: 1,
        //     items: [
        //       {
        //         value: "CE",
        //         text: "CE",
        //         selected: false
        //       },
        //       {
        //         value: "CORPORATIVO",
        //         text: "CORPORATIVO",
        //         selected: false
        //       },
        //       {
        //         value: "DF-GO",
        //         text: "DF-GO",
        //         selected: false
        //       },
        //       {
        //         value: "ES",
        //         text: "ES",
        //         selected: false
        //       },
        //       {
        //         value: "MT-TO",
        //         text: "MT-TO",
        //         selected: false
        //       }
        //     ]
        //   }
        // },
        {
          selectionInput: {
            name: "categoria",
            label: "Categoria",
            type: "DROPDOWN",
            items: categoriaItems,
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

function cardStepTwo(subcategoriaItems) {
  const cardSections = {
      "widgets": [
        // {
        //   selectionInput: {
        //     name: "Departamento",
        //     label: "Departamento",
        //     type: "DROPDOWN",
        //     items: departmentItems,
        //   }
        // },
        // {
        //   selectionInput: {
        //     type: "MULTI_SELECT",
        //     label: "Unidade de Negócio",
        //     name: "unidadeNegócio",
        //     multiSelectMaxSelectedItems: 3,
        //     multiSelectMinQueryLength: 1,
        //     items: unidadeItems
        //   }
        // },
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
                    function: "confirmedTwo"
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

function cardSelectAssunto(assuntoItems) {
  const cardHeader = {
    "subtitle": "Selecione o Assunto e digite uma breve descrição:",
}
  const cardSections = {
      "widgets": [
        {
          selectionInput: {
            name: "Assunto",
            label: "Assunto",
            type: "DROPDOWN",
            items: assuntoItems
          }
        },
        {
          textInput: {
            label: "Descrição",
            type: "SINGLE_LINE",
            name: "descricao"
          }
        },
        {
          buttonList: {
            buttons: [
              {
                text: "Confirmar",
                onClick: {
                  action: {
                    function: "openSalvar",
                  }}
              }]
            }
        }
    ]
  }

  return {
      cardsV2: [{
          cardId: "cardAssunto",
          card: {
            header: cardHeader,
            sections: [cardSections]
          }
      }]
  }
}

function receiveDialog(event) {
    return {
      actionResponse: {
        type: "DIALOG",
        dialogAction: {
          actionStatus: "OK"
        }
      }
    };
}



module.exports = { initialCard, cardAreaNegocio, cardStepTwo, cardSelectAssunto, receiveDialog };