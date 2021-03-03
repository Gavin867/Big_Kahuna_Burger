const objectRelationMap = require("../configuration/object_relational_mapping");

const bigKahunaBurger = {
    all: function (currentBurger) {
        objectRelationMap.all("hamburgers", (results) => {
            currentBurger(results);
        });
    },
    create: function (columns, values, currentBurger) {
        objectRelationMap.create("hamburgers", columns, values, (results) => {
            currentBurger(results);
        });
    },
    update: function (convertToSQL, hamburgerStatus, currentBurger) {
        objectRelationMap.update("hamburgers", convertToSQL, hamburgerStatus, (result) => {
            currentBurger(results);
        });
    }
    // delete: function (hamburgerStatus, currentBurger) {
    //     objectRelationMap.delete("hamburgers", hamburgerStatus, (result) => {
    //         currentBurger(result);
    //     });
    // }
}

module.exports = bigKahunaBurger