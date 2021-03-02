const express = require("express");
const connection = require("../configuration/connection");
const router = express.Router();
const bigKahunaBurger = require("../models/bigKahunaBurger");

router.get("/", function (request, result) {
    bigKahunaBurger.select(function (data) {
        let burgerData = {
            hamburgers: data
        };
        results.render("index", burgerData);
    });
});
