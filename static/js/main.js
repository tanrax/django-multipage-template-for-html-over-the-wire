import {connect, startEvents} from './webSocketsCli.js';
import { Application } from "./vendors/stimulus.js"
import navbarController from "./controllers/navbar_controller.js"
import todoController from "./controllers/todo_controller.js"
/*
    INITIALIZATION
*/

// WebSocket connection
connect();
startEvents();

// Stimulus
window.Stimulus = Application.start();
// Register all controllers
Stimulus.register("navbar", navbarController);
Stimulus.register("todo", todoController);
