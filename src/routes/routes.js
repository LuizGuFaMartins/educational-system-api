const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const studentRouter = require("./students/studentRoutes");

router.use("/students", studentRouter);

module.exports = router;
