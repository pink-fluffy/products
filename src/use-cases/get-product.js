import axios from 'axios';
const config = process.env;
/**
 *
 * @param {*} productsDb
 * @returns
 */
export default function makeGetProduct(productsDb) {
	return async function getProduct(id) {
		var product = await productsDb.findByShortId(id);
		for (var i = 0; i < product.reviews.length; i++) {
			var productReview = product.reviews[i];
			const userId = productReview.userId;
			await axios({
				method: 'GET',
				url: `http://${config.IDENTITY_HOST}:${config.IDENTITY_PORT}/user/${userId}`
			})
				.then(function (res) {
					const name = `${res.data.data.first_name} ${res.data.data.last_name}`;

					productReview.userId = name;
					product.reviews[i] = productReview;
					console.log(product.reviews[i].userId);
				})
				.catch(function (err) {
					throw err;
				});
		}
		return product;
	};
}
