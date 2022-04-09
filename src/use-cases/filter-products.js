/**
 *
 * @param {*} productsDb
 * @returns
 */
export default function makeFilterProducts(productsDb) {
	return async function filterProducts(query) {
		// TODO validate query object
		return productsDb.filter(query);
	};
}
