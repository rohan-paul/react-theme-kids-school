const express = require("express");
const userRoutes = express.Router();
const userController = require("../Controllers/userController");

/* This is my routes file containing all API endpoints to define all app routes related to the user, with HTTP methods.
middlewares: I can write middlewares here to interpret all incoming requests before moving to the route handler. Like e.g.
router.post('/login', auth, controller.login)
where auth would be a middleware function defined in middlewares/auth.js.
 */

userRoutes.post("/login", userController.login);

module.exports = userRoutes;
