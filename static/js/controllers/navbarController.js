import { Controller } from "../vendors/stimulus.js"
import { sendData } from "../webSocketsCli.js"

export default class extends Controller {

  static targets = [ "page" ]

  /**
   * Send new message
   * @param {Event} event
   * @return {void}
   */
  add(event) {
    event.preventDefault();
    // Prepare the information we will send
    const newData = {
          "action": "add message",
          "data": {
              "author": this.authorTarget.value,
              "text": this.textTarget.value
          }
      };
      // Send the data to the server
      sendData(newData, window.myWebSocket);
      // Clear message form
      this.textTarget.value = "";
    }
}