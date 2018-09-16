var mysql = require('mysql');

exports.con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_ipal"
});

exports.baseUrl = 'http://localhost:';

// change later to domain name
exports.allowAccesOrigin = 'http://localhost:4200';