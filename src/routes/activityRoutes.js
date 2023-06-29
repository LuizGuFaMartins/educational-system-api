const express = require("express");
const controller = require("../controllers/activitiesController");
const { verifyToken } = require("../midllewares/verifyToken");
const activityRoutes = express.Router();

activityRoutes.get("/", verifyToken, controller.findAll);
activityRoutes.post("/", verifyToken, controller.create);
activityRoutes.get(
  "/:studentId",
  verifyToken,
  controller.findActivitiesPerStudentSubjects
);

module.exports = activityRoutes;
