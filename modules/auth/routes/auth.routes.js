const { Router } = require("express");
const { AUTH_CONTROLLER } = require("../controller/auth.controller");
const { validateBody } = require("../../../utils/validation");
const { ICreateUser, ILoginUser } = require("../../../interface");

const AUTH_ROUTER = Router();

AUTH_ROUTER.post(
  "/register",
  validateBody(ICreateUser),
  AUTH_CONTROLLER.registerUser
);

AUTH_ROUTER.post("/login", validateBody(ILoginUser), AUTH_CONTROLLER.login);

module.exports = {
  AUTH_ROUTER,
};
