const connection = require("../configuration/connection");

function addQuestionMark(number) {
    let array = [];

    for (i = 0; i < number; i++) {
        array.push("?");
    }

    return array.toString();
};

// Convert key value pairs to SQL syntax
function convertToSQL(object) {
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

const objectRelationMap = {

    all: function (tableInsert, callback) {
        let stringQuery = `SELECT * FROM ${tableInsert};`

        connection.query(stringQuery, function (error, data) {
            if (error) {
                throw error;
            };

            callback(data);
        });
    },

    create: function (table, columns, values, callback) {
        let stringQuery = `INSERT INTO ${table} (${columns.toString()}) VALUES (${addQuestionMark(values.length)})`

        console.log(stringQuery);
        connection.query(stringQuery, values, function (error, data) {
            if (error) {
                throw error;
            };
            callback(data);
        });
    },

    update: function (table, columnValues, hamburgerStatus, callback) {
        let stringQuery = `UPDATE ${table} SET ${convertToSQL(columnValues)} WHERE ${hamburgerStatus};`

        console.log(stringQuery);

        connection.query(stringQuery, function (error, data) {
            if (error) {
                throw error;
            };

            callback(data);
        });
    },

    delete: function (table, hamburgerStatus, callback) {
        let stringQuery = `DELETE FROM ${table} WHERE ${hamburgerStatus};`

        console.log(stringQuery);

        connection.query(stringQuery, function (error, data) {
            if (error) {
                throw error;
            };

            callback(data);
        });
    }
};

module.exports = objectRelationMap;