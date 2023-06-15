const express = require("express");
const controller = require("../controllers/loginController");
const loginRouter = express.Router();

loginRouter.get("/", controller.login);
loginRouter.post("/auth", controller.auth);

module.exports = loginRouter;
