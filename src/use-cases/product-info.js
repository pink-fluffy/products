export default class ProductInfo {
	constructor(product) {
		this.short_id = product.short_id;
		this.name = product.name;
		this.category = product.category;
		this.brand = product.brand;
		this.description = product.description;
		this.image = product.image;
		this.price = product.price;
		this.stock = product.stock;
	}
}
