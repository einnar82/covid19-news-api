const WHOController = require("./who.controller");
const LocalNewsController = require("./local-news.controller");

const controllers = {
  ...WHOController,
  ...LocalNewsController
};

module.exports = controllers;
