import enums from '../enums';
import makeReview from '../review';
import axios from 'axios';
const config = process.env;
/**
 *
 * @param {*} productsDb
 * @returns
 */
export default function makeAddReview(productsDb) {
	/**
	 * Add a review to a product
	 * @property {string} product_id
	 * @property {Object} review - Review object with `rating` and `text`
	 */
	return async function addReview(product_id, reviewInfo) {
		const product = await productsDb.findByShortId(product_id);
		if (!product) {
			throw { status: enums.STATUS_CODES.NOT_FOUND, message: enums.REASON_PHRASES.NOT_FOUND };
		}
		const review = makeReview(reviewInfo);
		var reviewedProduct = await productsDb.addReview(product_id, {
			userId: review.getUserId(),
			rating: review.getRating(),
			text: review.getText()
		});

		for (var i = 0; i < reviewedProduct.reviews.length; i++) {
			var productReview = reviewedProduct.reviews[i];
			const userId = productReview.userId;
			await axios({
				method: 'GET',
				url: `http://${config.IDENTITY_HOST}:${config.IDENTITY_PORT}/user/${userId}`
			})
				.then(function (res) {
					const name = `${res.data.data.first_name} ${res.data.data.last_name}`;

					productReview.userId = name;
					reviewedProduct.reviews[i] = productReview;
					console.log(reviewedProduct.reviews[i].userId);
				})
				.catch(function (err) {
					throw err;
				});
		}

		return reviewedProduct;
	};
}
