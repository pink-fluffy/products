import enums from '../enums';
export default function makeAddReview({ productService, ProductInfo, ServiceResponse, ServiceData }) {
	return async function addReview(req) {
		const body = req.body;
		const productId = req.params.id;
		const response = new ServiceResponse();
		try {
			const { userId, rating, text } = body;
			if (!(userId && rating && text))
				throw { status: enums.ERRORS.INVALID_INPUT.status, message: enums.ERRORS.INVALID_INPUT.message };
			const created = await add(productId, userId, rating, text);
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
	 *  Add a review to a product
	 * @param {*} userId
	 * @param {*} rating
	 * @param {*} text
	 * @returns
	 */
	async function add(productId, userId, rating, text) {
		const review = {
			userId: userId,
			rating: rating,
			text: text
		};

		const product = await productService.addReview(productId, review);
		const data = new ProductInfo(product);

		const last_modified = new Date(product.updated_at).toUTCString();
		return { data, last_modified };
	}
}
