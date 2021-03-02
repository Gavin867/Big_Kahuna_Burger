const express = require("express");
const connection = require("../configuration/connection");
const router = express.Router();
const bigKahunaBurger = require("../models/bigKahunaBurger");

router.get("/", function (request, response) {
    bigKahunaBurger.select(function (data) {

        let burgerData = {
            hamburgers: data
        };

        results.render("index", burgerData);
    });
});

router.post("/api/hamburgers", function (request, response) {

    bigKahunaBurger.create(["hamburger_name"], [request.body.hamburger_name], function (result) {

        response.json({ id: result.insertId });
    });
});

router.put("apil/hamburgers/:hamburger_id", function (request, response) {
    let hamburgerStatus = "hamburger_id = " + request.parameters.hamburger_id;

    bigKahunaBurger.update(
        { consumed: request.body.consumed },

        hamburgerStatus,

        function (result) {

            if (result.modifiedRows === 0) {
                return result.hamburgerStatus(404).end();
            };

            response.hamburgerStatus(200).end();
        }
    )
});

