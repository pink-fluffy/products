import buildMakeProduct from './product';
import validator from './validator';
import Id from '../id';

const makeProduct = buildMakeProduct({ validator, Id });

export default makeProduct;
