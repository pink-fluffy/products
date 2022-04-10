export default function buildMakeProduct({ validate, Id }) {
	return function makeProduct({
		id = Id(),
		name,
		category,
		brand,
		description,
		price,
		stock,
		reviews = [],
		created_at = Date.now(),
		updated_at = Date.now()
	} = {}) {
		validate({ id, name, category, brand, description, price, stock });
		return Object.freeze({
			getId: () => id,
			getName: () => name,
			getCategory: () => category,
			getBrand: () => brand,
			getDescription: () => description,
			getPrice: () => price,
			getStock: () => stock,
			getReviews: () => reviews,
			getCreatedAt: () => created_at,
			getUpdtatedAt: () => updated_at
		});
	};
}
