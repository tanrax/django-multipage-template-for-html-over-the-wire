import { Controller } from "../vendors/stimulus.js"
import { sendData } from "../webSocketsCli.js"

export default class extends Controller {

  static targets = [ "task" ]

    /**
     * Render new task
     * @return {void}
     */
    addNewTask() {
        sendData({
            action: 'Add task',
            data: {
                newTask: this.taskTarget.value
            }
        }, window.myWebSocket);
        // Clean input
        this.taskTarget.value = '';
    }
}
