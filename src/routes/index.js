const express = require("express");
const controllers = require("../controllers");
const router = express.Router();
const {
  faqController,
  situationReportsController,
  worldTallyController
} = controllers;

router.get("/faqs", faqController);
router.get("/latest-situations", situationReportsController);
// router.get("/world-tally", worldTallyController);

module.exports = router;
