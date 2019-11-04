import {
    GET_ALL_PRODUCTS_FAILURE ,
    GET_ALL_PRODUCTS_SUCCESS,
  } from '../actions/types';
  
  export const initialState = {};
  export function getAllProducts(state = {}, action) {
    switch (action.type) {
      case  GET_ALL_PRODUCTS_FAILURE:
        return { ...state, message: action.payload };
      case GET_ALL_PRODUCTS_SUCCESS:
        return { ...state, message: action.payload };
      default:
        return state;
    }
  }