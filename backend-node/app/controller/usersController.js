var config = require(__basedir + '/config');
var dbConnection = config.con;

module.exports = {
    authenticate: function(req, res){
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', config.allowAccesOrigin);

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        var username = req.query.username;
        var password = req.query.password;
        var sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
        dbConnection.query(sql, [ username, password ], function(err, result, fields){
            if(err) throw err;
            res.json({
                status: '200',
                data: result
            });
        });
    }
}