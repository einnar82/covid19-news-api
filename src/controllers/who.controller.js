const services = require("../services");
const {
  crawlCovid19Faqs,
  crawlSituationReports,
  crawlPublicAdvice,
  crawlNews
} = services;

const WHOController = {
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
        data: faqList
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
  },
  protectiveMeasuresController: (request, response) => {
    crawlPublicAdvice(data => {
      const { title, content } = data;
      const filteredContent = content
        .filter(item => item !== "")
        .map((item, index) => {
          return item.replace(/\r?\n|\r/g, "").trim();
        });
      response.json({
        source:
          "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public",
        title: title.replace(/\r?\n|\r/g, "").trim(),
        content: filteredContent
      });
    });
  },
  newsController: (request, response) => {
    crawlNews(data => {
      const { titles, links, dates } = data;
      const trimmedDates = dates.map(date =>
        date.replace(/I Speech/g, "").trim()
      );
      const trimmedTitles = titles.map((title, index) => {
        return {
          title: title.replace(/\r?\n|\r/g, "").trim(),
          link: links[index],
          date: trimmedDates[index]
        };
      });
      response.json({
        data: trimmedTitles
      });
    });
  }
};

module.exports = WHOController;
