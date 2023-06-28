const express = require("express");
const controller = require("../controllers/studentController");
const { verifyToken } = require("../midllewares/verifyToken");
const { validateStudent, validateLoginId } = require("../validators/StudentValidator");
const studentRouter = express.Router();

studentRouter.get("/", verifyToken, controller.findAll);
studentRouter.get("/:loginId", validateLoginId, controller.findPerLoginId);
studentRouter.post("/", validateStudent, controller.create);

module.exports = studentRouter;
