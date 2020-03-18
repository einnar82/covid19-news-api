const WHO = require("./who");
const localNews = require("./local-news");

const services = {
  ...WHO,
  ...localNews
};

module.exports = services;
