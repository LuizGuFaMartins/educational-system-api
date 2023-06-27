const express = require("express");
const controller = require("../controllers/loginController");
const loginRouter = express.Router();
const { verifyToken } = require("../midllewares/verifyToken");

loginRouter.post("/", controller.login);
loginRouter.get("/:loginId", verifyToken, controller.findOne);
loginRouter.put("/:loginId", verifyToken, controller.update);
loginRouter.put("/unnactive/:loginId", verifyToken, controller.unnactive);
loginRouter.delete("/:loginId", verifyToken, controller.delete);

module.exports = loginRouter;
