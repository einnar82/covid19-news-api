const Xray = require("x-ray");

const x = Xray();

const faqURL =
  process.env.FAQ_URL ||
  "https://www.who.int/news-room/q-a-detail/q-a-coronaviruses";

const locationsURL =
  process.env.LOCATION_URL ||
  "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports/";

const services = {
  crawlCovid19Faqs: callback => {
    x(faqURL, "div#sf-accordion", [
      {
        questions: ["a.sf-accordion__link"],
        answers: ["div.sf-accordion__content"]
      }
    ]).then(callback);
  },
  crawlSituationReports: callback => {
    x(
      locationsURL,
      "div#PageContent_C006_Col01 div.sf-content-block.content-block",
      [
        {
          cases: ["div p strong a"],
          links: ["div p strong a@href"],
          dates: ["div p"]
        }
      ]
    ).then(callback);
  }
};

module.exports = services;
