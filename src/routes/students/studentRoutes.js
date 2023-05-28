const express = require("express");
const controller = require("../../controllers/studentController");
const studentRouter = express.Router();

studentRouter.get("/", controller.findAll);

module.exports = studentRouter;
