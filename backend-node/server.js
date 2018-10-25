var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');

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

//For images base64
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded( { extended: false }));
// app.use(bodyParser.json());

var port = process.env.port || 8081;
var apiRoutes = express.Router();

// use it before all route definitions
app.use(cors({origin: config.allowAccesOrigin}));

app.use(morgan('dev'));
app.use('/api', apiRoutes);

// // Add headers
// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', config.allowAccesOrigin);

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

apiRoutes.get('/', function(req, res){
    res.send('Welcome to API for IPAL Application : ' + baseUrl + port + '/api');
});

apiRoutes.get('/ipalData', ipalData.getAllIpalData);
apiRoutes.get('/ipalData/:idIpalData', ipalData.getIpalDataById);
apiRoutes.get('/ipalData/category/:idCategory', ipalData.getIpalDataByCategoryId);
apiRoutes.post('/ipalData', ipalData.insertIpalData);
apiRoutes.delete('/ipalData/:idIpalData', ipalData.deleteIpalData);

apiRoutes.get('/ipalCategory', ipalCategory.getAllIpalCategory);

apiRoutes.get('/authenticate', users.authenticate);

app.listen(port);
console.log('Application run at ' + baseUrl + port);