import makeProduct from '../product';
import enums from '../enums';
/**
 *
 * @param {*} productsDb
 * @returns
 */
export default function makeAddProduct(productsDb) {
	/**
	 * Check for duplicate user and invoke usersDB insert method
	 * @param {Object} userInfo
	 * @property {string} first_name - First Name
	 * @property {string} last_name - Last Name
	 * @property {string} email - Email
	 * @property {string} password - Hashed Password
	 */
	return async function addProduct(productInfo) {
		const product = makeProduct(productInfo);
		const exists = await productsDb.findDuplicate(productInfo);
		if (exists) {
			throw { status: enums.ERRORS.DUPLICATE_USER.status, message: enums.ERRORS.DUPLICATE_USER.message };
		}

		return productsDb.insert({
			id: product.getId(),
			name: product.getName(),
			category: product.getCategory(),
			brand: product.getBrand(),
			description: product.getDescription(),
			image: product.getImage(),
			price: product.getPrice(),
			stock: product.getStock()
		});
	};
}
