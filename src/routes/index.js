const express = require("express");
const controllers = require("../controllers");
const router = express.Router();
const {
  getFAQs,
  getSituationReports,
  getProtectiveMeasures,
  getWHONews,
  getCheckpoints
} = controllers;

router.get("/faqs", getFAQs);
router.get("/latest-situations", getSituationReports);
router.get("/protective-measures", getProtectiveMeasures);
router.get("/news", getWHONews);
router.get("/metro-manila-checkpoints", getCheckpoints);

module.exports = router;
