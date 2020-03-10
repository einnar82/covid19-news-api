const express = require("express");
const apicache = require("apicache");
const cors = require("cors");
const router = require("./routes");
const uest = require("uest");

const app = express();
let cache = apicache.middleware;
const port = process.env.PORT || 3000;

app.use(cors());
app.use(cache("5 minutes"));
app.use(uest());
app.use("/api/covid19", router);

app.get("/", (request, response) => {
  response.json({
    message: "Welcome to COVID19 NEWS API",
    link: "https://github.com/einnar82/covid19-news-api"
  });
});

app.listen(port, () => console.log(`App listening on port ${port}`));
