
// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const companiesAPI = require('./server/routes/companiesApi');
const customersAPI = require('./server/routes/customersApi');
const commentsAPI = require('./server/routes/commentsApi');

const Sequelize = require('sequelize');
const app = express();
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/project')));

// Set our api routes
app.use('/companiesApi', companiesAPI);
app.use('/customersApi', customersAPI); // use enables the midddleware, which is customerAPI
app.use('/commentsApi', commentsAPI);

// Catch all other routes and return the index file
app.get('*', (req, res) => { 
  console.log('yooooo')
  res.sendFile(path.join(__dirname, 'dis/project/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));