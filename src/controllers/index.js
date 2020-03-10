const services = require("../services");
const { crawlCovid19Faqs, crawlSituationReports } = services;
const getTextFromImage = require("../services/ocr");

const controllers = {
  faqController: (request, response) => {
    crawlCovid19Faqs(data => {
      const payload = data[0];
      const { questions, answers } = payload;

      const trimmedQuestions = questions.map((item, index) => {
        return item.replace(/\r?\n|\r/g, "").trim();
      });

      const faqList = answers.map((item, index) => {
        return {
          question: trimmedQuestions[index],
          answer: item.replace(/\r?\n|\r/g, "").trim()
        };
      });

      response.json({
        source: "https://www.who.int/news-room/q-a-detail/q-a-coronaviruses",
        faq: faqList
      });
    });
  },
  situationReportsController: (request, response) => {
    crawlSituationReports(data => {
      const payload = data[0];
      const { cases, links, dates } = payload;

      const situations = dates.map((date, index) => {
        return {
          case: cases[index],
          link: links[index],
          date: date
            .replace(
              /Situation report - [[0-9]+(Coronavirus disease 2019 \(COVID-19\)|Novel Coronavirus \(2019-nCoV\)|Erratum Novel Coronavirus \(2019-nCoV\))| ErratumNovel Coronavirus \(2019-nCoV\)/,
              ""
            )
            .trim()
        };
      });
      response.json({
        source:
          "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports/",
        data: situations.slice(0, 5)
      });
    });
  }
  // worldTallyController: (request, response) => {
  //   request.uest(
  //     {
  //       method: "GET",
  //       url: "/api/covid19/latest-situations"
  //     },
  //     (error, resp, body) => {
  //       const { data } = body;
  //       const [latestReport, ...otherReports] = data;
  //       getTextFromImage(latestReport.link).then(xx => {
  //         response.json({
  //           xx
  //         });
  //       });
  //     }
  //   );
  // }
};

module.exports = controllers;
