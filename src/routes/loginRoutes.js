const express = require("express");
const controller = require("../controllers/loginController");
const loginRouter = express.Router();
const { verifyToken } = require("../midllewares/verifyToken");
const { validateLoginId } = require("../validators/LoginValidator");

loginRouter.post("/", controller.login);
loginRouter.get("/:loginId", verifyToken, validateLoginId, controller.findOne);
loginRouter.put("/:loginId", verifyToken, validateLoginId, controller.update);
loginRouter.put(
  "/unnactive/:loginId",
  verifyToken,
  validateLoginId,
  controller.unnactive
);
loginRouter.delete(
  "/:loginId",
  verifyToken,
  validateLoginId,
  controller.delete
);

module.exports = loginRouter;
