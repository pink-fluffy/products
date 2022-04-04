import makeAddProduct from './add-product';
import ProductInfo from './product-info';
import { ServiceResponse, ServiceData } from './service-response';
import productsDb from '../data-access';
import makeGetAllProducts from './get-all-products';

const addProduct = makeAddProduct(productsDb);
const getAllProducts = makeGetAllProducts(productsDb);
const productService = Object.freeze({
	add: addProduct,
	getAll: getAllProducts
});
export default productService;
export { ServiceResponse, ServiceData, ProductInfo };
