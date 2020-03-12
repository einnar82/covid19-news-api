const express = require("express");
const controllers = require("../controllers");
const router = express.Router();
const {
  faqController,
  situationReportsController,
  protectiveMeasuresController
} = controllers;

router.get("/faqs", faqController);
router.get("/latest-situations", situationReportsController);
router.get("/protective-measures", protectiveMeasuresController);

module.exports = router;
