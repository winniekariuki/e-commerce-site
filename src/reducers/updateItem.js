import {
  UPDATE_ITEM_SUCCESS, UPDATE_ITEM_FAILURE,
  UPDATE_ITEM_REQUEST
  } from "../actions/types";
export const initialState = {
    updateItem: {
        data: {},
        errors: null,
        loading: false
    },
}
const updataItemReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_ITEM_REQUEST:
      return {
        ...state,
        loading: true
      };
    case UPDATE_ITEM_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: false
      };
    case UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
}

export default updataItemReducer;
