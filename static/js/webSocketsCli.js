/*
    FUNCTIONS
*/

/**
 * Connect to WebSockets server (SocialNetworkConsumer)
 * @param {string} url - WebSockets server url
 * @return {WebSocket}
 */
export function connect(url=`${document.body.dataset.scheme === 'http' ? 'ws' : 'wss'}://${ document.body.dataset.host }/ws/social-network/`) {
    window.myWebSocket = new WebSocket(url);
    return window.myWebSocket;
}

/**
 * Send data to WebSockets server
 * @param {string} message
 * @param {WebSocket} webSocket
 * @return {void}
 */
export function sendData(message, webSocket) {
    webSocket.send(JSON.stringify(message));
}

/*
    EVENTS
*/

/**
 * On WebSockets server connection
 * @param {WebSocket} webSocket
 * @return {void}
 */
export function startEvents(webSocket=window.myWebSocket) {
    // Event when a new message is received by WebSockets
    webSocket.addEventListener("message", (event) => {
        // Parse the data received
        const data = JSON.parse(event.data);
        // Renders the HTML received from the Consumer
        const newFragment = document.createRange().createContextualFragment(data.html);
        const target = document.querySelector(data.selector);
        if (data.append) {
            target.appendChild(newFragment);
        } else {
            target.replaceChildren(newFragment);
        }
        // Update URL
        history.pushState({}, '', data.url)
    });
}