var config = require(__basedir + '/config');
var dbConnection = config.con;
var ipalData = require(__basedir + '/app/models/ipalData');
const fs = require('fs');

module.exports = {
    getAllIpalData: function(req, res){
        // // Website you wish to allow to connect
        // res.setHeader('Access-Control-Allow-Origin', config.allowAccesOrigin);

        // // Request methods you wish to allow
        // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // // Request headers you wish to allow
        // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // // Set to true if you need the website to include cookies in the requests sent
        // // to the API (e.g. in case you use sessions)
        // res.setHeader('Access-Control-Allow-Credentials', true);

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
        // // Website you wish to allow to connect
        // res.setHeader('Access-Control-Allow-Origin', config.allowAccesOrigin);

        // // Request methods you wish to allow
        // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // // Request headers you wish to allow
        // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // // Set to true if you need the website to include cookies in the requests sent
        // // to the API (e.g. in case you use sessions)
        // res.setHeader('Access-Control-Allow-Credentials', true);

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
        // // Website you wish to allow to connect
        // res.setHeader('Access-Control-Allow-Origin', config.allowAccesOrigin);

        // // Request methods you wish to allow
        // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // // Request headers you wish to allow
        // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // // Set to true if you need the website to include cookies in the requests sent
        // // to the API (e.g. in case you use sessions)
        // res.setHeader('Access-Control-Allow-Credentials', true);
        
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
    },
    insertIpalData: function(req, res) {
        // // Website you wish to allow to connect
        // res.setHeader('Access-Control-Allow-Origin', config.allowAccesOrigin);

        // // Request methods you wish to allow
        // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // // Request headers you wish to allow
        // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // // Set to true if you need the website to include cookies in the requests sent
        // // to the API (e.g. in case you use sessions)
        // res.setHeader('Access-Control-Allow-Credentials', true);

        var idCategory = req.body.idCategory;
        var name = req.body.name;
        var address = req.body.address;
        var buildBy = req.body.buildBy;
        var developmentYear = req.body.developmentYear;
        var sourceOfFund = req.body.sourceOfFund;
        var technology = req.body.technology;
        var size = req.body.size;
        var capacity = req.body.capacity;
        var connectionNumber = req.body.connectionNumber;
        var manager = req.body.manager;
        var longitude = req.body.longitude;
        var latitude = req.body.latitude;
        console.log(req.body.photo);
        var photoBody = req.body.photo.value;

        

        // Photo section
        var photoArr = [];
        for (let index = 0; index < photoBody.length; index++) {
            const element = photoBody[index];

            //convert byte to image
            var base64Data = element.value;
            var dirrPath = config.root;
            var imageName = element.fileName;
            var imageLocation = dirrPath + imageName;
            var buff = new Buffer(base64Data, 'base64');

            fs.writeFile(imageLocation, buff, (err) => {
                if (err) throw err;
                console.log('Image successfully uploaded to ' + imageLocation);
            });

            photoArr.push(element.fileName);
        }
        var photo = photoArr.join(';');

        var sql = "INSERT INTO ipal_data (idCategory, name, address, build_by, development_year, source_of_fund, technology, size, capacity, connection_number, manager, longitude, latitude, photo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        dbConnection.query(sql, [ idCategory, name, address, buildBy, developmentYear, sourceOfFund, technology, size, capacity, connectionNumber, manager, longitude, latitude, photo ], function(err, result , fields){
            if(err) throw err;
            res.json({
                status: '200',
                data: result
            });
        });
    },
    deleteIpalData: function(req, res){
        // // Website you wish to allow to connect
        // res.setHeader('Access-Control-Allow-Origin', config.allowAccesOrigin);

        // // Request methods you wish to allow
        // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // // Request headers you wish to allow
        // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // // Set to true if you need the website to include cookies in the requests sent
        // // to the API (e.g. in case you use sessions)
        // res.setHeader('Access-Control-Allow-Credentials', true);
        
        var idIpalData = req.body.idIpalData;
        var sql = "DELETE FROM ipal_data WHERE idIpalData=?";
        var params = [ idIpalData ];
        dbConnection.query(sql, [ params ], function(err, result, fields){
            if(err) throw err;
            res.json({
                status: '200',
                data: result
            });
        });
    }
}