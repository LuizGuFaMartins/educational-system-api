const express = require("express");
const controller = require("../controllers/subjectsController");
const { verifyToken } = require("../midllewares/verifyToken");
const subjectRouter = express.Router();

subjectRouter.get("/", verifyToken, controller.findAll);
subjectRouter.get("/:studentId", verifyToken, controller.findPerStudent);
// subjectRouter.post("/", controller.create);

module.exports = subjectRouter;
