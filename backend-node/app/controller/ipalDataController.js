var config = require(__basedir + '/config');
var dbConnection = config.con;
var ipalData = require(__basedir + '/app/models/ipalData');

module.exports = {
    getAllIpalData: function(req, res){
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        var sql = "SELECT * FROM v_ipal_data ORDER BY name ASC";
        dbConnection.query(sql, function(err, result, fields){
            if(err) throw err;
            res.json({
                status: '200',
                data: result
            });
        });
    },
    getIpalDataById: function(req, res) {
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        var idIpalData = req.params.idIpalData;
        var sql = "SELECT * FROM v_ipal_data WHERE idIpalData=?";
        var params = [ idIpalData ];
        dbConnection.query(sql, [ params ], function(err, result, fields){
            if(err) throw err;
            res.json({
                status: '200',
                data: result
            });
        });
    },
    getIpalDataByCategoryId: function(req, res) {
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
        
        var idCategory = req.params.idCategory;
        var sql = "SELECT * FROM v_ipal_data WHERE idCategory=?";
        var params = [ idCategory ];
        dbConnection.query(sql, [ params ], function(err, result, fields){
            if(err) throw err;
            res.json({
                status: '200',
                data: result
            });
        });
    }
}