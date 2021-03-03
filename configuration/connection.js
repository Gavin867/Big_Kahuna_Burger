require("dotenv").config();
const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    });
};

connection.connect(function (error) {
    if (error) {
        console.error("Error connecting: " + error.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;