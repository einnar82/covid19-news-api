const express = require("express");
const apicache = require("apicache");
const cors = require("cors");
const router = require("./routes");

const app = express();
let cache = apicache.middleware;
const port = process.env.PORT || 3000;

app.use(cors());
app.use(cache("5 minutes"));
app.use("/api/covid19", router.routes);

app.listen(port, () => console.log(`App listening on port ${port}`));
