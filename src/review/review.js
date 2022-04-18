export default function buildMakeReview(validate) {
	return function makeReview({ userId, rating, text } = {}) {
		validate({ rating, text });

		return Object.freeze({
			getUserId: () => userId,
			getRating: () => rating,
			getText: () => text
		});
	};
}
