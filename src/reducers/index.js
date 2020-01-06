
import { combineReducers } from 'redux';

import products from './getProducts';
import shoppingCart from './addToCart'
import totalAmount from './totalAmount';
import shoppingCartData from './shoppingCart';


const rootReducer = combineReducers({
    products,
    shoppingCart,
    shoppingCartData,
    totalAmount
});
export default rootReducer;

