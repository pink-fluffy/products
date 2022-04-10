/**
 *
 * @param {*} productsDb
 * @returns
 */
export default function makeFilterProducts(productsDb, validate) {
	return async function filterProducts(query) {
		validate(query);
		return productsDb.filter(query);
	};
}
