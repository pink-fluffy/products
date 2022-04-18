import makeAddProduct from './add-product';
import { validateQuery } from '../product';
import ProductInfo from './product-info';
import Review from './review';
import { ServiceResponse, ServiceData } from './service-response';
import productsDb from '../data-access';
import makeGetAllProducts from './get-all-products';
import makeFilterProducts from './filter-products';
import makeGetProduct from './get-product';
import makeAddReview from './add-review';

const addProduct = makeAddProduct(productsDb);
const getAllProducts = makeGetAllProducts(productsDb);
const filterProducts = makeFilterProducts(productsDb, validateQuery);
const getProduct = makeGetProduct(productsDb);
const addReview = makeAddReview(productsDb);

const productService = Object.freeze({
	add: addProduct,
	getAll: getAllProducts,
	filter: filterProducts,
	get: getProduct,
	addReview: addReview
});
export default productService;
export { ServiceResponse, ServiceData, ProductInfo, Review };
