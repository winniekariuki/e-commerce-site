import {
   GET_ALL_PRODUCTS_FAILURE ,
  GET_ALL_PRODUCTS_SUCCESS,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  SEARCH_REQUEST
    
  } from '../actions/types';

  
  export const initialState = {products :[]};
export default function getAllProducts(state = {}, action) {
    switch (action.type) {
      case  GET_ALL_PRODUCTS_FAILURE:
        return { ...state, message: action.payload };
      case GET_ALL_PRODUCTS_SUCCESS:
        return { ...state, products: action.products };
        case SEARCH_REQUEST:
          return {
            ...state,
            loading: true
          };
        case  SEARCH_FAILURE:
          return {
            ...state,
            message: action.errors,
            loading: false
          };
          case SEARCH_SUCCESS:
          return {
              ...state,
            products: action.products,
            loading: false
          };
      default:
        return state;

    }
   
}

export const cartState = {
  addedItems: [],
  total: 0,
  items: []
};

