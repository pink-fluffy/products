import makeAddProduct from './add-product';
import productService from '../use-cases';
import { ProductInfo, ServiceResponse, ServiceData } from '../use-cases';
import makeGetAllProducts from './get-all-products';

const postProduct = makeAddProduct({ productService, ProductInfo, ServiceResponse, ServiceData });
const getAllProducts = makeGetAllProducts({ productService, ProductInfo, ServiceResponse, ServiceData });

const postController = Object.freeze({
	postProduct,
	getAllProducts
});

export default postController;
