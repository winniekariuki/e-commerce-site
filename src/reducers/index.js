
import { combineReducers } from 'redux';

import products from './getProducts';
// import shoppingCart from './addToCart'
import totalAmount from './totalAmount';
import shoppingCart from './shoppingCart';
import removeCartItem from './removeCartItem';
import updateItem from './updateItem';



const rootReducer = combineReducers({
    products,
    shoppingCart,
    totalAmount,
    removeCartItem,
    updateItem,
});
export default rootReducer;

