const services = require("../services");

const { crawlCheckpoints } = services;

const GMAController = {
  getCheckpoints: (request, response) => {
    crawlCheckpoints(data => {
      response.json({
        data
      });
    });
  }
};

module.exports = GMAController;
