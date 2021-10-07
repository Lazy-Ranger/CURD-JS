const express = require("express");
const morgan = require("morgan");
const { APP_CONFIG } = require("./config");
const { API_ROUTER } = require("./router");

class ExpressApp {
  constructor() {
    this.app = express();
    this.init();
  }
  async init() {
    this.app.use(morgan(APP_CONFIG.LOGGER_TYPE));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(API_ROUTER);
  }
}

module.exports = ExpressApp;
