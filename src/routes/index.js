const express = require("express");
const controllers = require("../controllers");

const router = express.Router();

exports.routes = router.get("/faqs", controllers.faqController);
