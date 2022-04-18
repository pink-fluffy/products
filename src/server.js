import express from 'express';
var debug = require('debug')('products:server');
import logger from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import makeExpressCallback from './express';
import productController from './controllers';
import http from 'http';

dotenv.config();

const apiRoot = process.env.PRODUCTS_API_ROOT;
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res, next) {
	res.send('Unicorn Store Products Microservice REST API');
});
app.post(`/${apiRoot}/add`, makeExpressCallback(productController.postProduct));
app.get(`/${apiRoot}/getAll`, makeExpressCallback(productController.getAllProducts));
app.get(`/${apiRoot}`, makeExpressCallback(productController.filterProducts));
app.get(`/${apiRoot}/:id`, makeExpressCallback(productController.getProduct));
app.post(`/${apiRoot}/:id/addReview`, makeExpressCallback(productController.postReview));

// Get port from environment and store in Express.
var port = process.env.PRODUCTS_PORT;
app.set('port', port);

// Create HTTP server.
var server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port, '0.0.0.0');
server.on('listening', onListening);

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
	var addr = server.address();
	var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
	debug('Listening on ' + bind);
}
