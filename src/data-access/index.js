import mongoose from 'mongoose';
import makeProductsDb from './product-db';
import productModel from './product-model';

/**
 * make db
 */
export async function makeDb() {
	const URI = process.env.PRODUCTS_MONGODB_URI;
	const options = {
		useNewUrlParser: true,
		useUnifiedTopology: true
	};

	console.log('Mongoose state: ' + mongoose.STATES[mongoose.connection.readyState]);
	if (mongoose.connection.readyState != 1) {
		try {
			mongoose.connect(URI, options);
			console.log('Mongoose state: ' + mongoose.STATES[mongoose.connection.readyState]);
			console.log('Succesfully connected to mongoose');
		} catch (err) {
			console.error('Failed to connect to mongoose :', URI);
			console.error(err);
		}
	}
}

const productsDb = makeProductsDb({ makeDb: makeDb, productModel: productModel });
export default productsDb;
