var config = require(__basedir + '/config');
var dbConnection = config.con;
var ipalData = require(__basedir + '/app/models/ipalData');

module.exports = {
    getAllIpalData: function(req, res){
        var sql = "SELECT * FROM v_ipal_data ORDER BY name ASC";
        dbConnection.query(sql, function(err, result, fields){
            if(err) throw err;
            res.json({
                status: '200',
                data: result
            });
        });
    }
}