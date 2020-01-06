
import {
    FETCH_TOTAL_AMOUNT_CART_SUCCESS, FETCH_TOTAL_AMOUNT_CART_FAILURE,
    FETCH_TOTAL_AMOUNT_CART_REQUEST
} from "../actions/types";

export const initialState = {
    totalAmount: {
        data: {},
        errors: null,
        loading: false
      },
};

const totalAmountReducer = (state = {}, action) => {
  switch(action.type) {
    case FETCH_TOTAL_AMOUNT_CART_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_TOTAL_AMOUNT_CART_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: false
      };
    case FETCH_TOTAL_AMOUNT_CART_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
}

export default totalAmountReducer;
