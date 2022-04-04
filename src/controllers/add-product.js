import enums from '../enums';
export default function makeAddProduct({ productService, ProductInfo, ServiceResponse, ServiceData }) {
	return async function addProduct(body) {
		const response = new ServiceResponse();
		try {
			const { name, category, brand, description, price, stock } = body;
			if (!(name && category && brand && description && price && stock))
				throw { status: enums.ERRORS.INVALID_INPUT.status, message: enums.ERRORS.INVALID_INPUT.message };
			const created = await add(name, category, brand, description, price, stock);
			const resBody = new ServiceData(created.data, enums.REASON_PHRASES.CREATED);
			const status = enums.STATUS_CODES.CREATED;
			response.body = resBody;
			response.status = status;
			response.last_modified = created.last_modified;
		} catch (err) {
			console.log(err);
			const resBody = new ServiceData(null, err.message);
			response.body = resBody;
			response.status = err.status;
		}
		return response;
	};

	/**
	 * Add a new product with given information
	 * @param {String} name
	 * @param {String} category
	 * @param {String} description
	 * @param {String} price
	 * @param {String} stock
	 */
	async function add(name, category, brand, description, price, stock) {
		const productInfo = {
			name: name,
			category: category,
			brand: brand,
			description: description,
			price: price,
			stock: stock
		};

		const product = await productService.add(productInfo);
		const data = new ProductInfo(product);

		const last_modified = new Date(product.updated_at).toUTCString();
		return { data, last_modified };
	}
}
