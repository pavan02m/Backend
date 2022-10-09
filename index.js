const express = require("express");
const dbConnection = require("./utils/DBConfiguration");
const authRoute = require("./routes/auth");
const countryRoute = require("./routes/base_tables/country");
const roleRoute = require("./routes/role");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(require("cors")());

const routePrefix = "api";
app.use(`/${routePrefix}`, authRoute);
app.use(`/${routePrefix}/country`, countryRoute);
app.use(`/${routePrefix}/role`, roleRoute);

app.listen(5001, async() => {
    try {
        await dbConnection(process.env.MONGO_URI);
        console.log("dbConnected at", process.env.MONGO_URI);
      } catch (error) {
        console.log("Db not connected");
      }
});