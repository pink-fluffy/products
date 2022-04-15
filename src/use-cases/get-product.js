/**
 *
 * @param {*} productsDb
 * @returns
 */
export default function makeGetProduct(productsDb) {
	return async function getProduct(id) {
		return productsDb.findByShortId(id);
	};
}
