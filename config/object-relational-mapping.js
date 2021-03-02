const connection = require("./connection");

function addQuestionMark(number) {
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

        if (Object.hasOwnProperty.call(object, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            };
            array.push(key + "=" + value);
        };
    };

    return array.toString();
};

const objectRelationalMapping = {

    selectAll: function (tableInsert, currentBurger) {
        let stringQuery = `SELECT * FROM ${tableInsert};`
    
        connection.query(stringQuery, values, function (error, data) {
            if (error) {
                throw error;
            };

            currentBurger(data);
        });
    },

    insertBurger: function (table, columns, values, currentBurger) {
        let stringQuery = `INSERT INTO ${table} (${columns.toString()}) VALUES (${addQuestionMark(values.length)})`
    
        console.log(stringQuery);

        connection.query(stringQuery, values, function (error, data) {
            if (error) {
                throw error;
            };

            currentBurger(data);
        });
    }
};