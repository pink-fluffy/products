import enums from '../enums';
export default function makeFilterProducts({ productService, ProductInfo, ServiceResponse, ServiceData }) {
	return async function filterProducts(req) {
		const query = req.query;
		const response = new ServiceResponse();
		try {
			if (!(query.category || query.brand))
				throw { status: enums.ERRORS.INVALID_INPUT.status, message: enums.ERRORS.INVALID_INPUT.message };
			const products = await filter(query);
			const resBody = new ServiceData(products.data, enums.REASON_PHRASES.OK);
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
	 * Filter products by query
	 */
	async function filter(query) {
		const products = await productService.filter(query);
		const data = [];
		products.forEach((product) => {
			const productData = new ProductInfo(product);
			data.push(productData);
		});

		if (data.length == 0) throw { status: enums.STATUS_CODES.NOT_FOUND, message: enums.REASON_PHRASES.NOT_FOUND };

		return { data };
	}
}
