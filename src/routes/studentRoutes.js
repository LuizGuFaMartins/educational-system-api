const express = require("express");
const controller = require("../controllers/studentController");
const { verifyToken } = require("../midllewares/verifyToken");
const { validateStudent } = require("../validators/StudentValidator");
const studentRouter = express.Router();

studentRouter.get("/", verifyToken, controller.findAll);
studentRouter.post("/", validateStudent, controller.create);

module.exports = studentRouter;
