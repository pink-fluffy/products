export default function makeProductsDb({ makeDb, productModel }) {
	return Object.freeze({
		findByShortId,
		insert,
		findDuplicate,
		findAll,
		filter,
		addReview
	});

	async function insert(product) {
		const db = await makeDb();
		const result = await productModel.add(product);
		return result;
	}

	async function findByShortId(id) {
		const db = await makeDb();
		const result = await productModel.findOne({ short_id: id });
		return result;
	}

	async function findDuplicate(product) {
		const db = await makeDb();

		const result = productModel
			.findOne({
				name: product.name,
				brand: product.brand,
				category: product.category
			})
			.exec();

		return result;
	}

	async function findAll() {
		const db = await makeDb();

		const result = productModel.find({});
		return result;
	}

	async function filter(query) {
		const db = await makeDb();
		const result = await productModel.find(query);
		return result;
	}

	async function addReview(product_id, review) {
		const db = await makeDb();
		const product = await findByShortId(product_id);
		const result = await product.addReview(review);
		return result;
	}
}
