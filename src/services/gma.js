const Xray = require("x-ray");

const x = Xray();

const checkpointURL =
  process.env.CHC ||
  "https://www.gmanetwork.com/news/news/metro/729725/checkpoints-in-metro-manila-during-community-quarantine/story/";

const GMA = {
  crawlCheckpoints: callback => {
    x(faqURL, "div#story1", [
      {
        title: "div.story_title"
      }
    ]).then(callback);
  }
};

module.exports = GMA;
