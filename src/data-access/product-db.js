export default function makeProductsDb({ makeDb, productModel }) {
	return Object.freeze({
		findById,
		insert,
		findDuplicate,
		findAll,
		filter
	});

	async function insert(product) {
		const db = await makeDb();
		const result = await productModel.add(product);
		return result;
	}

	async function findById(id) {
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
}
