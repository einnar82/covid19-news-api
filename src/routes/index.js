const express = require("express");
const controllers = require("../controllers");

const router = express.Router();

router.get("/faqs", controllers.faqController);
module.exports = router;
