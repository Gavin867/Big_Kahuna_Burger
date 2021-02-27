const connection = require("./connection");

function renderQuestionMarks(number) {
    let array = [];

    for (i = 0; i < number; i++) {
        array.push("?");
    }

    return array.toString();
};

