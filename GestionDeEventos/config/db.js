const mysql = require("mysql");

const connection = mysql.createConnection({ 
    host: "localhost",
    database: "gestiondeeventos",
    user: "root",
    password: ''
});

module.exports = connection;