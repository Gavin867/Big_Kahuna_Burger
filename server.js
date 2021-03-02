require('dotenv').config();

const express = require("express");
const expressHandlebars = require("express-handlebars");
const routes = require("./controllers/bkb_controller");
const app = express();

const PORT = process.env.PORT || 8080;
const database = require("./models/bigKahunaBurger");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
