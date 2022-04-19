import { Controller } from "../vendors/stimulus.js"
import { sendData } from "../webSocketsCli.js"

export default class extends Controller {

  static targets = [ "item", "paginator" ]

  connect() {
    this.enableInfiniteScroll();
  }

    /*
        FUNCTIONS
    */

    /**
     * Switches to the next page when the last message is displayed.
     */
    enableInfiniteScroll() {
        const lastMessage = this.itemTargets.at(-1);
        // Turn the page when the last message is displayed.
        const observerLastMessage = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (!this.isLastPage()) this.goToNextPage();
                }
            });
        });

        observerLastMessage.observe(lastMessage);
    }


    /**
     * Get current page stored in #paginator as dataset
     * @returns {number}
     */
    getCurrentPage() {
        return parseInt(this.paginatorTarget.dataset.page);
    }

    /**
     * Check if we are on the last page
     * @returns {boolean}
     */
    isLastPage() {
        return parseInt(this.paginatorTarget.dataset.totalPages) === this.getCurrentPage();
    }


    /**
     * Switch to the next page
     * @param {Event} event
     * @return {void}
     */
    goToNextPage(event) {
        // Prepare the information we will send
        const newData = {
            "action": "list messages",
            "data": {
                "page": this.getCurrentPage() + 1,
            }
        };
        // Send the data to the server
        sendData(newData, myWebSocket);
    }

    /**
     * Displays the update form
     * @param {Event} event
     * @return {void}
     */
    displayUpdateForm(event) {
        const message = {
            "action": "open edit page",
            "data": {
                "id": event.target.dataset.id
            }
        };
        sendData(message, window.myWebSocket);
    }


    /**
     * Update message
     * @param {Event} event
     * @return {void}
     */
    updateMessage(event) {
        event.preventDefault();
        const message = {
            "action": "update message",
            "data": {
                "id": event.target.dataset.id,
                "author": event.target.querySelector("#message-form__author--update").value,
                "text": event.target.querySelector("#message-form__text--update").value
            }
        };
        sendData(message, myWebSocket);
    }

    /**
     * Delete message
     * @param {Event} event
     * @return {void}
     */
    deleteMessage(event) {
        const message = {
            "action": "delete message",
            "data": {
                "id": event.target.dataset.id
            }
        };
        sendData(message, window.myWebSocket);
    }
}