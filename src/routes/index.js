const express = require("express");
const controllers = require("../controllers");
const router = express.Router();
const { faqController, situationReportsController } = controllers;

router.get("/faqs", faqController);
router.get("/latest-situations", situationReportsController);
module.exports = router;
