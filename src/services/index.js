const Xray = require("x-ray");

const x = Xray();

const faqURL =
  process.env.FAQ_URL ||
  "https://www.who.int/news-room/q-a-detail/q-a-coronaviruses";

const services = {
  crawlCovid19Faqs: callback => {
    x(faqURL, "div#sf-accordion", [
      {
        questions: ["a.sf-accordion__link"],
        answers: ["div.sf-accordion__content"]
      }
    ]).then(callback);
  }
};

module.exports = services;
