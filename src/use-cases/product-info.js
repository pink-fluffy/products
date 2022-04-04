export default class ProductInfo {
	constructor(product) {
		this.name = product.name;
		this.category = product.category;
		this.brand = product.brand;
		this.description = product.description;
		this.price = product.price;
		this.stock = product.stock;
	}
}
