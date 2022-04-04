import enums from '../enums';
export default function makeGetAllProducts({ productService, ProductInfo, ServiceResponse, ServiceData }) {
	return async function getAllProducts() {
		const response = new ServiceResponse();
		try {
			const products = await getAll();
			const resBody = new ServiceData(products.data, enums.REASON_PHRASES.CREATED);
			const status = enums.STATUS_CODES.CREATED;
			response.body = resBody;
			response.status = status;
		} catch (err) {
			console.log(err);
			const resBody = new ServiceData(null, err.message);
			response.body = resBody;
			response.status = err.status;
		}
		return response;
	};

	/**
	 * Get all the products
	 */
	async function getAll() {
		const products = await productService.getAll();
		const data = [];
		products.forEach((product) => {
			const productData = new ProductInfo(product);
			data.push(productData);
		});

		return { data };
	}
}
