const { createWorker } = require("tesseract.js");
const worker = createWorker();
const PSM = require("tesseract.js/src/constants/PSM.js");

async function getTextFromImage(imgPath) {
  await worker.load();
  await worker.loadLanguage("eng");
  await worker.initialize("eng");
  await worker.setParameters({
    tessedit_pageseg_mode: PSM.AUTO
  });

  const {
    data: { text }
  } = await worker.recognize(imgPath);

  await worker.terminate();

  return text;
}

module.exports = getTextFromImage;
