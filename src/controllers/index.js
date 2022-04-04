import makeAddProduct from './add-product';
import productService from '../use-cases';
import { ProductInfo, ServiceResponse, ServiceData } from '../use-cases';

const postProduct = makeAddProduct({ productService, ProductInfo, ServiceResponse, ServiceData });

const postController = Object.freeze({
	postProduct
});

export default postController;
