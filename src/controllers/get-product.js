import enums from '../enums';
export default function makeGetProduct({ productService, ProductInfo, ServiceResponse, ServiceData }) {
	return async function getProduct(req) {
		const id = req.params.id;
		const response = new ServiceResponse();
		try {
			const product = await get(id);
			const resBody = new ServiceData(product.data, enums.REASON_PHRASES.OK);
			const status = enums.STATUS_CODES.OK;
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
	 * Get product by id
	 */
	async function get(id) {
		const product = await productService.get(id);
		if (!product) {
			throw { status: enums.STATUS_CODES.NOT_FOUND, message: enums.REASON_PHRASES.NOT_FOUND };
		}
		const data = new ProductInfo(product);

		return { data };
	}
}
