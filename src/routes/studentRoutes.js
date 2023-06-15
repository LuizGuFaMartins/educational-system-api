const express = require("express");
const controller = require("../controllers/studentController");
const { verifyToken } = require("../midllewares/verifyToken");
const studentRouter = express.Router();

studentRouter.get("/", verifyToken, controller.findAll);
// studentRouter.post("/", verifyToken, controller.create);

module.exports = studentRouter;
