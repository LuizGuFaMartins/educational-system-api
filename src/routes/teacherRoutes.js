const express = require("express");
const controller = require("../controllers/teachersController");
const { verifyToken } = require("../midllewares/verifyToken");
const { validateLoginId } = require("../validators/StudentValidator");
const teacherRoutes = express.Router();

teacherRoutes.get("/", verifyToken, controller.findAll);
teacherRoutes.get("/:loginId", validateLoginId, controller.findPerLoginId);
teacherRoutes.post("/", controller.create);

module.exports = teacherRoutes;
