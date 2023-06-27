const express = require("express");
const router = express.Router();
const studentRouter = require("./studentRoutes");
const loginRouter = require("./loginRoutes");
const subjectRouter = require("./subjectRoutes");

router.use("/login", loginRouter);
router.use("/students", studentRouter);
router.use("/subjects", subjectRouter);

module.exports = router;
