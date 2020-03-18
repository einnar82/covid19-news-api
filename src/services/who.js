const Xray = require("x-ray");

const x = Xray();

const faqURL =
  process.env.FAQ_URL ||
  "https://www.who.int/news-room/q-a-detail/q-a-coronaviruses";

const locationsURL =
  process.env.LOCATION_URL ||
  "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports/";

const publicAdviceURL =
  process.env.PUBLIC_ADVICE_URL ||
  "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public";

const newsURL =
  process.env.NEWS_URL ||
  "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/media-resources/news";

const WHO = {
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
  },
  crawlPublicAdvice: callback => {
    x(publicAdviceURL, "div#PageContent_C003_Col01", {
      title: ".section-heading",
      content: ["div.sf-content-block.content-block > div"]
    }).then(callback);
  },
  crawlNews: callback => {
    x(
      newsURL,
      "div#PageContent_C003_Col01 div.list-view.highlight-widget div.list-view--item.highlight-widget--content",
      {
        titles: ["a div.table-cell.info p.heading.text-underline"],
        links: ["a@href"],
        dates: ["a div.table-cell.info p.sub-title"]
      }
    ).then(callback);
  }
};

module.exports = WHO;
