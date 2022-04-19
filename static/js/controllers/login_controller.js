import { Controller } from "../vendors/stimulus.js"
import { sendData } from "../webSocketsCli.js"

export default class extends Controller {

  static targets = [ "email", "password" ]

    /**
     * Send form from login page
     * @param {Event} event
     * @return {void}
     */
     sendFormLogin(event) {
        event.preventDefault();
        sendData({
            action: 'Login',
            data: {
                email: this.emailTarget.value,
                password: this.passwordTarget.value
            }
        }, window.myWebSocket);
    }
}
