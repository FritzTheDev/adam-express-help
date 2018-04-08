const express = require('express'),
      mongoose = require('mongoose'),
      logger = require('morgan'),
      bcrypt = require('bcryptjs'),
      passport = require('passport'),
      bodyParser = require('body-parser'),
      path = require('path'),
      fs = require('fs'),
      app = express();

require('dotenv').config();

app.set('env', process.env.NODE_ENV || 'development' );
app.set('host', process.env.HOST || '0.0.0.0');
app.set('port', process.env.PORT || 8080);
