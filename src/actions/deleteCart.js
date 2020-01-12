import axios from 'axios';

import {DELETE_ITEM_SUCCESS,DELETE_ITEM_FAILURE,DELETE_ITEM_REQUEST } from "./types";

const baseUrl =  'https://backendapi.turing.com';

export const deleteItemSuccess = (data) => ({
    type: DELETE_ITEM_SUCCESS,
  data
});

export const deleteItemFailure = (errors) => ({
    type: DELETE_ITEM_FAILURE,
  errors
});

export const deleteItemRequest = () => ({
    type: DELETE_ITEM_REQUEST
});

const deleteItemActions = (cartId) => dispatch => {
  dispatch(deleteItemRequest());
  const url = `${baseUrl}/shoppingcart/empty/${cartId}`;
  return axios.delete(url)
    .then(response => dispatch(deleteItemSuccess(response.data)))
    .catch(error => dispatch(deleteItemFailure(error)))
}

export default deleteItemActions;
