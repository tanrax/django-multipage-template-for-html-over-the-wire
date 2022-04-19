import {connect, startEvents} from './webSocketsCli.js';
import { Application } from "./vendors/stimulus.js"
import navbarController from "./controllers/navbar_controller.js"
import todoController from "./controllers/todo_controller.js"
import loginController from "./controllers/login_controller.js"
import signupController from "./controllers/signup_controller.js"

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
Stimulus.register("login", loginController);
Stimulus.register("signup", signupController);
