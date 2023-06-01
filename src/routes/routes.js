const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const studentRouter = require("./studentRoutes");
const loginRouter = require("./loginRoutes");

router.use("/logins", loginRouter);
router.use("/students", studentRouter);

module.exports = router;
