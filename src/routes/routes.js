const express = require("express");
const router = express.Router();
const studentRouter = require("./studentRoutes");
const loginRouter = require("./loginRoutes");
const subjectRouter = require("./subjectRoutes");
const teacherRoutes = require("./teacherRoutes");

router.use("/login", loginRouter);
router.use("/students", studentRouter);
router.use("/teachers", teacherRoutes);
router.use("/subjects", subjectRouter);

module.exports = router;
