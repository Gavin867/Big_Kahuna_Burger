const connection = require("./connection");

function renderQuestionMarks(number) {
    let array = [];

    for (i = 0; i < number; i++) {
        array.push("?");
    }

    return array.toString();
};

// Convert key value pairs to SQL syntax
function convertToSQL (object) {
    let array = [];

    for (let key in object) {

        let value = object[key];

        if (Object.hasOwnProperty.call(oject, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            };
        };
    };

    return array.toString();
};