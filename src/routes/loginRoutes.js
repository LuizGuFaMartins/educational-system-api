const express = require("express");
const controller = require("../controllers/loginController");
const loginRouter = express.Router();

loginRouter.post("/", controller.login);

module.exports = loginRouter;
