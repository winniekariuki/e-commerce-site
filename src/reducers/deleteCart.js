import {
    DELETE_ITEM_SUCCESS,  DELETE_ITEM_FAILURE,
    DELETE_ITEM_REQUEST
  } from "../actions/types";

const initialState ={
    deleteItem: {
        data: { },
        errors: null,
            loading: false
    }
}
const deleteItemReducer = (state = initialState, action) => {
  switch(action.type) {
    case DELETE_ITEM_REQUEST:
      return {
        ...state,
        loading: true
      };
    case DELETE_ITEM_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: false
      };
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
}

export default deleteItemReducer;
