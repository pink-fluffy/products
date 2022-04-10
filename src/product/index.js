import buildMakeProduct from './product';
import validator from './validator';
import Id from '../id';

const validateProduct = validator.validateProduct;
const makeProduct = buildMakeProduct({ validateProduct, Id });

export default makeProduct;

const validateQuery = validator.validateQuery;
export { validateQuery };
