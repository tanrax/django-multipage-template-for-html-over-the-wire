import { Controller } from "../vendors/stimulus.js"
import { sendData } from "../webSocketsCli.js"

export default class extends Controller {

  static targets = [ "username", "email", "password", "passwordConfirm" ]

    /**
     * Send form from login page
     * @param {Event} event
     * @return {void}
     */
     sendFormSignup(event) {
        event.preventDefault();
        sendData({
            action: 'Signup',
            data: {
                username: this.usernameTarget.value,
                email: this.emailTarget.value,
                password: this.passwordTarget.value,
                password_confirm: this.passwordConfirmTarget.value
            }
        }, window.myWebSocket);
    }
}
