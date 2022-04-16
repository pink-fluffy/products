class ProductDAO {
	static async add(product) {
		// Create product in database
		const createdProduct = await this.create({
			short_id: product.id,
			name: product.name,
			category: product.category,
			brand: product.brand,
			description: product.description,
			image: product.image,
			price: product.price,
			stock: product.stock,
			created_at: product.created_at,
			updated_at: product.updated_at
		});

		return createdProduct;
	}
}

export default ProductDAO;
