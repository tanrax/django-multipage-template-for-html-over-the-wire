import { Controller } from "../vendors/stimulus.js"
import { sendData } from "../webSocketsCli.js"

export default class extends Controller {

    static targets = [ "author", "text" ]

     /**
     * Update message
     * @param {Event} event
     * @return {void}
     */
    update(event) {
        event.preventDefault();
        const message = {
            "action": "update message",
            "data": {
                "id": event.target.dataset.id,
                "author": this.authorTarget.value,
                "text": this.textTarget.value
            }
        };
        sendData(message, myWebSocket);
    }
}