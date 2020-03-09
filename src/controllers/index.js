const services = require("../services");
const { crawlCovid19Faqs } = services;

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
  }
};

module.exports = controllers;
