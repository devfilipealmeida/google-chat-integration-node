/**
* Responds to messages that have links whose URLs
* match URL patterns configured for link previews.
*
* @param {Object} event The event object from Chat
* API.
*
* @return {Object} Response from the Chat app
* attached to the message with the previewed link.
*/
exports.onMessage = function onMessage(req, res) {

    // Store the Google Chat event as a variable.
    const event = req.body;
  
    if (req.method === "GET" || !event.message) {
      res.send("Hello! This function is meant to be used in a Google Chat " +
        "Space.");
    }
  
    // Checks for the presence of event.message.slashCommand.
    // If the slash command is "/help", responds with a text message.
    // If the slash command is "/createContact", opens a dialog.
    if (event.message.slashCommand) {
      switch (event.message.slashCommand.commandId) {
        case 1: // /help
          res.json({"text": "Contact bot helps you update your address book!"});
        case 2:  // /createContact
          openDialog(event);
      }
    }
  
    // If the Chat app doesn"t detect a slash command, it responds
    // with a card that prompts the user to add a contact
    else {
      res.json({
        "cardsV2": [{
          "cardId": "addContact",
          "card": {
            "header": {
              "title": "Rolodex",
              "subtitle": "Manage your contacts!",
              "imageUrl": "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
              "imageType": "CIRCLE"
            },
            "sections": [
              {
                "widgets": [
                  {
                    "buttonList": {
                      "buttons": [
                        {
                          "text": "Add Contact",
                          "onClick": {
                            "action": {
                              "function": "openDialog",
                              "interaction": "OPEN_DIALOG"
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
        }]
      });
    }
  
    // Respond to button clicks on attached cards
    if (event.type === "CARD_CLICKED") {
  
      if (event.common.invokedFunction === "openDialog") {
        openDialog(event);
      }
  
      if (event.common.invokedFunction === "openSequentialDialog") {
        openSequentialDialog(event);
      }
  
      if (event.common.invokedFunction === "confirmDialogSuccess") {
        confirmDialogSuccess(event);
      }
  
    }
  };
  
  /**
  * Opens and starts a dialog that lets users add details about a contact.
  *
  * @param {object} event the event object from Google Chat.
  *
  * @return {object} open a dialog.
  */
  function openDialog(event) {
    res.json({
      "action_response": {
        "type": "DIALOG",
        "dialog_action": {
          "dialog": {
            "body": {
              "sections": [
                {
                  "header": "Add new contact",
                  "widgets": [
                    {
                      "textInput": {
                        "label": "Name",
                        "type": "SINGLE_LINE",
                        "name": "name"
                      }
                    },
                    {
                      "textInput": {
                        "label": "Address",
                        "type": "MULTIPLE_LINE",
                        "name": "address"
                      }
                    },
                    {
                      "decoratedText": {
                        "text": "Add to favorites",
                        "switchControl": {
                          "controlType": "SWITCH",
                          "name": "saveFavorite"
                        }
                      }
                    },
                    {
                      "decoratedText": {
                        "text": "Merge with existing contacts",
                        "switchControl": {
                          "controlType": "SWITCH",
                          "name": "mergeContact",
                          "selected": true
                        }
                      }
                    },
                    {
                      "buttonList": {
                        "buttons": [
                          {
                            "text": "Next",
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
  
  /**
  * Opens a second dialog that lets users add more contact details.
  *
  * @param {object} event the event object from Google Chat.
  *
  * @return {object} open a dialog.
  */
  function openSequentialDialog(event) {
    res.json({
      "action_response": {
        "type": "DIALOG",
        "dialog_action": {
          "dialog": {
            "body": {
              "sections": [
                {
                  "header": "Add new contact",
                  "widgets": [
                    {
                      "textInput": {
                        "label": "Notes",
                        "type": "MULTIPLE_LINE",
                        "name": "notes"
                      }
                    },
                    {
                      "selectionInput": {
                        "type": "RADIO_BUTTON",
                        "label": "Contact type",
                        "name": "contactType",
                        "items": [
                          {
                            "text": "Work",
                            "value": "Work",
                            "selected": false
                          },
                          {
                            "text": "Personal",
                            "value": "Personal",
                            "selected": false
                          }
                        ]
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
  
  /**
  * Checks for a form input error, the absence of
  * a "name" value, and returns an error if absent.
  * Otherwise, confirms successful receipt of a dialog.
  *
  * Confirms successful receipt of a dialog.
  *
  * @param {Object} event the event object from Chat API.
  *
  * @return {object} open a Dialog in Google Chat.
  */
  function receiveDialog(event) {
  
    // Checks to make sure the user entered a name
    // in a dialog. If no name value detected, returns
    // an error message. Any "actionStatus" value other than "OK"
    // gets returned as an error.
    if (event.common.formInputs.contactName.stringInputs.value[0] === "") {
      res.json({
        "actionResponse": {
          "type": "DIALOG",
          "dialogAction": {
            "actionStatus": "Don't forget to name your new contact!"
          }
        }
      });
  
      // Otherwise the Chat app indicates that it received
      // form data from the dialog. An "actionStatus" of "OK" is
      // interpreted as code 200, and the dialog closes.
    } else {
      res.json({
        "actionResponse": {
          "type": "DIALOG",
          "dialogAction": {
            "actionStatus": "OK"
          }
        }
      });
    }
  }
  