const axios = require('axios');
const fs = require('fs');

fs.readFile('./products.json', 'utf8', async (err, jsonString) => {
	const data = JSON.parse(jsonString);
	var products = data.products;

	for (const product in products) {
		var review = {
			userId: 'id',
			rating: products[product].rating,
			text: products[product].top_reviews
		};
		const name = encodeURI(products[product].image);
		const brand = encodeURI(products[product].brand);
		const category = encodeURI(products[product].category);
		try {
			const res = await axios({
				method: 'GET',
				url: `http://localhost:9045/product?category=${category}&brand=${brand}&image=${name}`
			});
			var short_id = res.data.data[0].short_id;

			await postReview(short_id, review);
		} catch {}
	}
});
async function postReview(short_id, review) {
	await axios({
		method: 'POST',
		url: `http://localhost:9045/product/${short_id}/addReview`,
		data: review
	}).then(function (res) {
		console.log(res.data);
	});
}
