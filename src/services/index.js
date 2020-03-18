const WHO = require("./who");
const GMA = require("./gma");

const services = {
  ...WHO,
  ...GMA
};

module.exports = services;
