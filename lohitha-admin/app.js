//  author: lohitha bhethalam 
const express = require('express')
const http = require('http')
const expressLayouts = require('express-ejs-layouts')
const favicon = require('serve-favicon')
const path = require('path')
const bodyParser = require('body-parser')
const engines = require('consolidate')
const session = require('express-session')
const errorHandler = require('errorhandler')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const expressValidator = require('express-validator')
const expressStatusMonitor = require('express-status-monitor')
const LOG = require('./utils/logger.js')
const logfile = '/access.log'
const app = express()  // make express app
const port = process.env.PORT  || 8089
const fs = require('fs')


// ADD THESE COMMENTS AND IMPLEMENTATION HERE
// 1 set up the view engine
// 2 include public assets and use bodyParser
// 3 set up the logger
// 4 handle valid GET requests
// 5 handle valid POST request
// 6 respond with 404 if a bad URI is requested
dotenv.load({ path: '.env' })
LOG.info('Environment variables loaded.')
app.set('views', path.resolve(__dirname, 'views')) // path to views
app.set('view engine', 'ejs') // specify our view engine

// 2 include public assets and use bodyParser
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(expressLayouts)
app.use(errorHandler()) // load error handler


// -------------- ROUTING -----------------

const routes = require('./routes/index.js');
app.use('/', routes);
LOG.info('Routing set at /routes/index.js');

// ----------------------------------------


// initialize data ............................................
require('./utils/seeder.js')(app)  
 
 // Listen for an application request on designated port
 app.listen(port, function () {
  console.log('Web app started and listening on http://localhost:' + port)
  console.log('\nLogs will be sent to this terminal and ' + logfile + '.')
 })