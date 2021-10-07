const { Router } = require("express");
const { validateBody } = require("../../../utils/validation");
const USERS_ACCOUNT_CONTROLLER = require("../controller/account.controller");
const { IUpdatePassword } = require("../../../interface");

const USERS_ACCOUNT_ROUTER = Router();

USERS_ACCOUNT_ROUTER.put(
  "/password",
  validateBody(IUpdatePassword),
  USERS_ACCOUNT_CONTROLLER.changePassword
);

module.exports = {
  USERS_ACCOUNT_ROUTER,
};
