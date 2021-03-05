const express = require("express");
const router = express.Router();
const bigKahunaBurger = require("../models/bigKahunaBurger");

router.get("/", function (req, res) {
    bigKahunaBurger.all(function (data) {

        let hamburgerData = { hamburgers: data };

        res.render("index", hamburgerData);
    });
});

router.post("/api/hamburgers", function (req, res) {

    bigKahunaBurger.create(["hamburger_name", "hamburger_devoured"], [req.body.hamburger_name, req.body.hamburger_devoured], function (result) {

        res.json({ hamburger_id: result.insertId });
    });
});

router.put("/api/hamburgers/:hamburger_id", function (req, res) {
    let hamburgerStatus = "hamburger_id = " + req.params.hamburger_id;

    console.log(hamburgerStatus);

    console.log(req.body);

    bigKahunaBurger.update(
        { hamburger_devoured: req.body.hamburger_devoured },

        hamburgerStatus,

        function (result) {

            if (result.modifiedRows === 0) {

                return res.sendStatus(404).end();
            };

            res.sendStatus(200).end();
        });
});

router.delete("/api/hamburgers/:hamburger_id", function (req, res) {
    let hamburgerStatus = "hamburger_id = " + req.params.hamburger_id;

    bigKahunaBurger.delete(hamburgerStatus, function (result) {

        if (result.modifiedRows == 0) {

            return  res.sendStatus(404).end();
        };

        res.sendStatus(200).end();
    });
});

module.exports = router; 