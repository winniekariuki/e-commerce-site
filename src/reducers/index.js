
import { combineReducers } from 'redux';

import products from './getProducts';
import {getShoppingCartId, addProductToCart, getShoppingCartTotal, getShoppingCartItems} from './addToCart';

const rootReducer = combineReducers({
    products,
    shoppingCart: addProductToCart,

    
    
    cardId: getShoppingCartId,
 
    total: getShoppingCartTotal,
    items: getShoppingCartItems,

});
export default rootReducer;

