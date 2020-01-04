
import { combineReducers } from 'redux';

import products from './getProducts';
import {addProductToCart} from './getProducts';

const rootReducer = combineReducers({
    products,
    shoppingCart: addProductToCart
});
export default rootReducer;

