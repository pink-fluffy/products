const Review = {
	userId: { type: String, required: true },
	rating: { type: Number, required: true, min: 0, max: 5 },
	text: { type: String }
};

export default { Review };
