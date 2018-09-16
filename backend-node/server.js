var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');

var jwt = require('jsonwebtoken');
var config = require('./config');
var dbConnection = config.con;
var baseUrl = config.baseUrl;

//controller
global.__basedir = __dirname;
var ipalData = require('./app/controller/ipalDataController');
var ipalCategory = require('./app/controller/ipalCategoryController');

var users = require('./app/controller/usersController');
//end controller

var port = process.env.port || 8081;
var apiRoutes = express.Router();

app.use(bodyParser.urlencoded( { extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use('/api', apiRoutes);

apiRoutes.get('/', function(req, res){
    res.send('Welcome to API for IPAL Application : ' + baseUrl + port + '/api');
});

apiRoutes.get('/ipalData', ipalData.getAllIpalData);
apiRoutes.get('/ipalData/:idIpalData', ipalData.getIpalDataById);
apiRoutes.get('/ipalData/category/:idCategory', ipalData.getIpalDataByCategoryId);

apiRoutes.get('/ipalCategory', ipalCategory.getAllIpalCategory);

apiRoutes.get('/authenticate', users.authenticate);

app.listen(port);
console.log('Application run at ' + baseUrl + port);