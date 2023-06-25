const express = require("express");
const router = express.Router();
const studentRouter = require("./studentRoutes");
const loginRouter = require("./loginRoutes");
const { verifyToken } = require("../midllewares/verifyToken");

router.use("/login", loginRouter);
router.use("/students", studentRouter);

module.exports = router;
