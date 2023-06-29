const express = require("express");
const router = express.Router();
const studentRouter = require("./studentRoutes");
const loginRouter = require("./loginRoutes");
const subjectRouter = require("./subjectRoutes");
const teacherRoutes = require("./teacherRoutes");
const activityRoutes = require("./activityRoutes");
const { verifyToken } = require("../midllewares/verifyToken");

router.use("/login", loginRouter);
router.use("/students", studentRouter);
router.use("/teachers", teacherRoutes);
router.use("/subjects", verifyToken, subjectRouter);
router.use("/activities", verifyToken, activityRoutes);

module.exports = router;
