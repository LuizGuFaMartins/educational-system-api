const express = require("express");
const controller = require("../controllers/loginController");
const loginRouter = express.Router();

loginRouter.get("/", controller.save);
loginRouter.post("/auth", controller.login);

module.exports = loginRouter;
