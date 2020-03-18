const WHOController = require("./who.controller");
const GMAController = require("./gma.controller");

const controllers = {
  ...WHOController,
  ...GMAController
};

module.exports = controllers;
