import {
    REMOVE_CART_ITEM_SUCCESS, REMOVE_CART_ITEM_FAILURE,
    REMOVE_CART_ITEM_REQUEST
  } from "../actions/types";

export const initialState = {
    removeItem: {
        data: {},
        errors: null,
        loading: false
      }, 
  }  

const removecartitemReducer = (state = initialState, action) => {
  switch(action.type) {
    case REMOVE_CART_ITEM_REQUEST:
      return {
        ...state,
        loading: true
      };
    case REMOVE_CART_ITEM_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: false
      };
    case REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
}

export default removecartitemReducer;
