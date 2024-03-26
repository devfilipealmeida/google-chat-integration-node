function tasyMVAjusteDialog(event) {
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
                    textInput: {
                      label: "Nome Usuário",
                      type: "SINGLE_LINE",
                      name: "Nome Usuário"
                    }
                  },
                  {
                    textInput: {
                      label: "Descrição",
                      type: "SINGLE_LINE",
                      name: "Descrição"
                    }
                  },
                  {
                    textInput: {
                      label: "N° Ticket GLPI(Se Houver)",
                      type: "SINGLE_LINE",
                      name: "glpi"
                    }
                  },
                  {
                    buttonList: {
                      buttons: [
                        {
                          text: "Salvar",
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

function tasyMVCreateDialogOne(event) {
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
                              function: "opentasyMVCreateDialogTwo"
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

function tasyMVCreateDialogTwo(event) {
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
                    textInput: {
                      label: "Nome Usuário",
                      type: "SINGLE_LINE",
                      name: "nomeUsuário"
                    }
                  },
                  {
                    textInput: {
                      label: "Usuário para Cópia",
                      type: "SINGLE_LINE",
                      name: "usuarioCopia"
                    }
                  },
                  {
                    textInput: {
                      label: "Cargo",
                      type: "SINGLE_LINE",
                      name: "Cargo"
                    }
                  },
                  {
                    textInput: {
                      label: "CPF Usuário",
                      type: "SINGLE_LINE",
                      name: "CPFUsuario"
                    }
                  },
                  {
                    textInput: {
                      label: "Tipo de Usuário",
                      type: "SINGLE_LINE",
                      name: "tipoUsuario"
                    }
                  },
                  {
                    textInput: {
                      label: "Descrição",
                      type: "SINGLE_LINE",
                      name: "Descrição"
                    }
                  },
                  {
                    textInput: {
                      label: "N° Ticket GLPI(Se Houver)",
                      type: "SINGLE_LINE",
                      name: "glpi"
                    }
                  },
                  {
                    buttonList: {
                      buttons: [
                        {
                          text: "Salvar",
                          onClick: {
                            action: {
                              function: "openSalvar",
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


module.exports = { tasyMVAjusteDialog, tasyMVCreateDialogOne, tasyMVCreateDialogTwo }