const express = require("express");
const connection = require("../configuration/connection");
const router = express.Router();
const bigKahunaBurger = require("../models/bigKahunaBurger");

router.get("/", function (request, response) {
    bigKahunaBurger.select(function (data) {

        let hamburgerData = { hamburgers: data };

        results.render("index", hamburgerData);
    });
});

router.post("/api/hamburgers", function (request, response) {

    bigKahunaBurger.create(["hamburger_name"], [request.body.hamburger_name], function (result) {

        response.json({ hamburger_id: result.insertId });
    });
});

router.put("apil/hamburgers/:hamburger_id", function (request, response) {
    let hamburgerStatus = "hamburger_id = " + request.parameters.hamburger_id;

    console.log(hamburgerStatus);

    console.log(request.body);

    bigKahunaBurger.update(
        { devoured: request.body.devoured },

        hamburgerStatus,

        function (result) {

            if (result.modifiedRows === 0) {

                return result.hamburgerStatus(404).end();
            };

            response.hamburgerStatus(200).end();
        });
});

router.delete("/api/hamburgers/:id", function (request, response) {
    let hamburgerStatus = "hamburger_id = " + request.parameters.hamburger_id;

    bigKahunaBurger.delete(hamburgerStatus, function (result) {

        if (result.modifiedRows == 0) {

            return result.hamburgerStatus(404).end();
        };

        response.hamburgerStatus(200).end();
    });
});

module.exports = router; 