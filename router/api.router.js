const { Router } = require("express");
const { AUTH_ROUTER } = require("../modules/auth");
const { USERS_ACCOUNT_ROUTER, USERS_ROUTER } = require("../modules/users");
const { authorizedToken } = require("../shared/middlewares");

const API_ROUTER = Router();

// auth routes
API_ROUTER.use("/auth", AUTH_ROUTER);

// users routes
API_ROUTER.use("/users", authorizedToken, USERS_ROUTER);
API_ROUTER.use("/users/account", authorizedToken, USERS_ACCOUNT_ROUTER);

module.exports = {
  API_ROUTER,
};
