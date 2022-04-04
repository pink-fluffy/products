import mongoose from 'mongoose';
import schema from './product-schema';
import ProductDAO from './product-dao';

schema.loadClass(ProductDAO);

const productModel = mongoose.model('Product', schema);
export default productModel;
