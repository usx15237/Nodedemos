const express = require('express')
const http = require('http')
var app = express()
const bodyParser = require('body-parser')
var index=require('./middlewares/index');
var customer=require('./middlewares/customer');

app.use('/',index)
app.use('/customer',customer)

app.use( function (req, res, next) {
    res.end();
  });

const server = http.createServer(app);

server.listen('8888');