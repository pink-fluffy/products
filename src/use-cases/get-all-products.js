/**
 *
 * @param {*} productsDb
 * @returns
 */
export default function makeGetAllProducts(productsDb) {
	return async function getAllProducts() {
		return productsDb.getAll();
	};
}
