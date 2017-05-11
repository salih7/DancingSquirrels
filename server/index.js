const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/db.js');
const routes = require('./routers/routes.js');
const express = require('express');
const session = require('express-session');

const app = module.exports = express();

app.port = process.env.PORT || 8080;
app.env = process.env.NODE_ENV || 'development';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('morgan')('combined'));

console.log(process.env.DATABASE_URL)

app.use(session({ 
  secret: process.env.COOKIE_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.use('/', express.static(path.join(__dirname + '/../client')));

app.use('/', routes);

const config = require('./config.js');

app.listen(app.port, function () {
  console.log('Example app listening on port ' + app.port);
});


