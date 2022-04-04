import makeAddProduct from './add-product';
import ProductInfo from './product-info';
import { ServiceResponse, ServiceData } from './service-response';
import productsDb from '../data-access';

const addProduct = makeAddProduct(productsDb);

const productService = Object.freeze({
	add: addProduct
});
export default productService;
export { ServiceResponse, ServiceData, ProductInfo };
