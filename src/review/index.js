import buildMakeReview from './review';
import validator from './validator';

const validateReview = validator.validateReview;
const makeReview = buildMakeReview(validateReview);

export default makeReview;
