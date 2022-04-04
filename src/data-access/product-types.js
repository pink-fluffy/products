const Review = {
	rating: { type: Number, required: true, min: 0, max: 5 },
	description: { type: String }
};

export default { Review };
