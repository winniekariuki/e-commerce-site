import { ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE } from '../actions/types';

export const initialState = {
  data: [],
  errors: null,
  loading: false
};
const addtocartReducer = (
  state = initialState, action
) => {
  switch(action.type) {
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

export default addtocartReducer;
