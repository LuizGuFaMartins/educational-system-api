const express = require("express");
const controller = require("../controllers/subjectsController");
const { verifyToken } = require("../midllewares/verifyToken");
const subjectRouter = express.Router();

subjectRouter.get("/", verifyToken, controller.findAll);
subjectRouter.post("/", verifyToken, controller.create);
subjectRouter.get("/:studentId", verifyToken, controller.findPerStudent);
subjectRouter.post("/cancel", verifyToken, controller.cancelSubscription);
subjectRouter.post("/subscribe", verifyToken, controller.subscribe);

module.exports = subjectRouter;
