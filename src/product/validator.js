import enums from '../enums';
/**
 *
 * @param {*} product
 */
export default function validator(product) {
	const validationError = {
		status: enums.ERRORS.INVALID_INPUT.status,
		message: enums.ERRORS.INVALID_INPUT.message
	};
	return { status: enums.STATUS_CODES.OK, message: '' };
}
