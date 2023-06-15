const express = require("express");
const router = express.Router();
const studentRouter = require("./studentRoutes");
const loginRouter = require("./loginRoutes");
const { verifyToken } = require("../midllewares/verifyToken");

router.use("/logins", loginRouter);
router.use("/students", verifyToken, studentRouter);

module.exports = router;
