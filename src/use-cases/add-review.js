import enums from '../enums';
import makeReview from '../review';
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
		return productsDb.addReview(product_id, {
			userId: review.getUserId(),
			rating: review.getRating(),
			text: review.getText()
		});
	};
}
