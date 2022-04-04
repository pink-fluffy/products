import mongoose from 'mongoose';
import enums from '../enums';
import types from './product-types';

const schema = new mongoose.Schema(
	{
		short_id: { type: String, unique: true, required: true },
		name: {
			type: String,
			required: true
		},
		category: {
			type: String,
			enum: Object.values(enums.CATEGORY),
			required: true
		},
		brand: {
			type: String,
			enum: Object.values(enums.BRAND),
			required: true
		},
		description: {
			type: String,
			required: true
		},
		price: {
			type: mongoose.Schema.Types.Decimal128,
			required: true,
			get: getPrice
		},
		stock: {
			type: Number,
			required: true
		},
		reviews: [types.Review],
		created_at: { type: Date, default: Date.now() },
		updated_at: { type: Date, default: Date.now() }
	},
	{ toJSON: { getters: true } }
);

function getPrice(value) {
	if (value) {
		return parseFloat(value);
	}
	return value;
}

export default schema;
