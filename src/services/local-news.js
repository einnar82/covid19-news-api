const Xray = require("x-ray");

const x = Xray();

const checkpointURL =
  process.env.CHECKPOINT_URL ||
  "https://news.abs-cbn.com/news/03/15/20/list-police-control-points-across-metro-manila-during-community-quarantine";

const localNews = {
  crawlCheckpoints: callback => {
    x(checkpointURL, "div.article-content", [
      { cities: ["p"], checkpoints: ["ul"] }
    ]).then(callback);
  }
};

module.exports = localNews;
