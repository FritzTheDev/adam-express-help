const express = require('express'),
      mongoose = require('mongoose'),
      logger = require('morgan'),
      bcrypt = require('bcryptjs'),
      passport = require('passport'),
      bodyParser = require('body-parser'),
      path = require('path'),
      fs = require('fs'),
      cors = require('cors'),
      app = express();

require('dotenv').config();

app.set('env', process.env.NODE_ENV || 'development' );
app.set('host', process.env.HOST || '0.0.0.0');
app.set('port', process.env.PORT || 8080);

// TODO: routes
const controllers = require('controllers/controllers');

//morgan
app.use(logger('common', {
  stream: fs.createWriteStream('./access.log', {
    flag: 'a'
  })
}));
app.use(logger('dev'))

//cors middleware
app.use(cors());

//body parser middleware
app.use(bodyParser());

//static directory
app.use(express.static(path.join(__dirname, 'public')));

// db connection
mongoose.connect(process.env.DATABASE);
mongoose.connection.on('connected', (req, res, next) => {
  console.log('Connected to database ' + process.env.DATABASE);
});

mongoose.connection.on('error', (err, next) => {
  console.log('Error connecting to database ' + err);
  next(err);
});
// TODO: Set route prefixes
app.use('/api', controllers)

//index route
app.get('/', (req, res, next) => {
  res.send('Connected to Server; Please use .API')
});

//catch 404
app.use((req, res, next) => {
  var err = Error('Not Found');
  err.status = 404;
});

//Dev Error Handler
//Prints Stack Trace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.code || 500)
      .json({
        status: 'error',
        message: err
      });
  });
}

//prod error handler
//no stack trace
app.use((err, req, res, next) => {
  res.status(err.code || 500)
    .json({
      status: 'error',
      message: err
  });
});

//start Server
app.listen(app.get("port"), () => {
  console.log('\n' + '******************************' )
  console.log('* REST API listening on ' + app.get('port') + ' *');
  console.log('******************************');
})
