var mysql = require('mysql');

exports.con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_ipal"
});

exports.baseUrl = 'http://localhost:'; //Active if local development
// exports.baseUrl = 'http://iservice.ipaljakarta.web.id/api'; //Active if deployed production

// change later to domain name
exports.allowAccesOrigin = 'http://localhost:4200'; //Active if local development
// exports.allowAccesOrigin = 'http://ipaljakarta.web.id'; //Active if deployed production

exports.root = 'C:/Users/17054005/Desktop/upload/';
// exports.root = 'http://ipaljakarta.web.id/assets/upload/'; //Active if deployed production