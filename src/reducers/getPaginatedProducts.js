import {
    GET_ALL_PRODUCTS_PAGINATED_FAILURE ,
  GET_ALL_PRODUCTS_PAGINATED_SUCCESS,
    
  } from '../actions/types';

  
  export const initialState = {products :[]};
  export default  function getAllPaginatedProduct(state = {}, action) {
    switch (action.type) {
      case  GET_ALL_PRODUCTS_PAGINATED_FAILURE:
        return { ...state, message: action.payload };
      case GET_ALL_PRODUCTS_PAGINATED_SUCCESS:
        return { ...state, products: action.products};
      default:
        return state;

    }
   
}