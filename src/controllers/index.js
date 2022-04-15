import makeAddProduct from './add-product';
import productService from '../use-cases';
import { ProductInfo, ServiceResponse, ServiceData } from '../use-cases';
import makeGetAllProducts from './get-all-products';
import makeFilterProducts from './filter-products';
import makeGetProduct from './get-product';

const postProduct = makeAddProduct({ productService, ProductInfo, ServiceResponse, ServiceData });
const getAllProducts = makeGetAllProducts({ productService, ProductInfo, ServiceResponse, ServiceData });
const filterProducts = makeFilterProducts({ productService, ProductInfo, ServiceResponse, ServiceData });
const getProduct = makeGetProduct({ productService, ProductInfo, ServiceResponse, ServiceData });

const postController = Object.freeze({
	postProduct,
	getAllProducts,
	filterProducts,
	getProduct
});

export default postController;
