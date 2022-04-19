import { Controller } from "../vendors/stimulus.js"
import { sendData } from "../webSocketsCli.js"

export default class extends Controller {

  static targets = [ "page" ]

    /**
     * Send message to update page
     * @param {Event} event
     * @return {void}
     */
    changePage(event) {
        event.preventDefault();
        sendData({
            action: 'Change page',
            data: {
                page: event.target.dataset.page
            }
        }, window.myWebSocket);
    }

    /**
     * Send message to Logout
     * @param {Event} event
     * @return {void}
     */
    logout(event) {
        sendData({
            action: 'Logout',
            data: {}
        }, window.myWebSocket);
    }
}
