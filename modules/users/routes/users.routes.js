const { Router } = require("express");
const { validateBody } = require("../../../utils/validation");
const USERS_CONTROLLER = require("../controller/users.controller");
const { IUserUpdate } = require("../../../interface");

const USERS_ROUTER = Router();

USERS_ROUTER.get("/profile", USERS_CONTROLLER.getSessionUser);
USERS_ROUTER.get("/:userId", USERS_CONTROLLER.getUser);

USERS_ROUTER.put("/", validateBody(IUserUpdate), USERS_CONTROLLER.updateUsers);

USERS_ROUTER.delete("/", USERS_CONTROLLER.deleteUser);

module.exports = {
  USERS_ROUTER,
};
