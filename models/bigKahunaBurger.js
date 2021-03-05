const objectRelationMap = require("../configuration/object_relational_mapping");

const bigKahunaBurger = {
    all: function (callback) {
        objectRelationMap.all("hamburgers", (results) => {
            callback(results);
        });
    },
    create: function (columns, values, callback) {
        objectRelationMap.create("hamburgers", columns, values, (results) => {
            callback(results);
        });
    },
    update: function (columnValues, hamburgerStatus, callback) {
        objectRelationMap.update("hamburgers", columnValues, hamburgerStatus, (results) => {
            callback(results);
        });
    },
    delete: function (hamburgerStatus, callback) {
        objectRelationMap.delete("hamburgers", hamburgerStatus, (results) => {
            callback(results);
        });
    }
};

module.exports = bigKahunaBurger