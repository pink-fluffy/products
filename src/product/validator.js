import enums from '../enums';
/**
 * Validate product info
 * @param {*} product
 */
function validateProduct(productInfo) {
	// validate product info
}

/**
 * Validate product query parameters
 * @param {String} query
 */
function validateQuery(query) {
	var valid = true;
	console.log(query);
	for (const param in query) {
		if (param === 'brand') {
			if (!query[param] in Object.values(enums.BRAND)) valid = false;
		} else if (param === 'category') {
			if (!query[param] in Object.values(enums.CATEGORY)) valid = false;
		} else if (param != 'brand' && param != 'category') valid = false;
	}
	if (!valid) throw { status: enums.ERRORS.INVALID_INPUT.status, message: enums.ERRORS.INVALID_INPUT.message };
}

export default { validateProduct, validateQuery };
