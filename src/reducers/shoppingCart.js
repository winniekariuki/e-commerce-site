import {
  FETCH_SHOPPING_CART_SUCCESS, FETCH_SHOPPING_CART_FAILURE,
  FETCH_SHOPPING_CART_REQUEST, ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE
} from "../actions/types";

export const initialState = {
    shoppingcart: {
        data: [],
        errors: null,
        loading: false
      },
};

const shoppingcartReducer = (state = {}, action) => {
  switch(action.type) {
    case FETCH_SHOPPING_CART_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_SHOPPING_CART_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: false
      };
    case FETCH_SHOPPING_CART_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
      case ADD_TO_CART_REQUEST:
        return {
          ...state,
          loading: true
        };
      case ADD_TO_CART_SUCCESS:
        return {
          ...state,
          data: action.data,
          loading: false
        };
      case ADD_TO_CART_FAILURE:
        return {
          ...state,
          errors: action.errors,
          loading: false
        };
    default:
      return state;
  }
}

export default shoppingcartReducer;
