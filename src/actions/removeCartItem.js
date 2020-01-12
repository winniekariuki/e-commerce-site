import axios from 'axios';

import { REMOVE_CART_ITEM_SUCCESS, REMOVE_CART_ITEM_FAILURE,REMOVE_CART_ITEM_REQUEST } from "./types";

const baseUrl =  'https://backendapi.turing.com';


export const removecartitemSuccess = (data) => ({
    type: REMOVE_CART_ITEM_SUCCESS,
  data
});

export const removecartitemFailure = (errors) => ({
    type: REMOVE_CART_ITEM_FAILURE,
  errors
});

export const removecartitemRequest = () => ({
    type: REMOVE_CART_ITEM_REQUEST
});

export const removecartitemActions = (itemId) => dispatch => {
  dispatch(removecartitemRequest());
  const url = `${baseUrl}/shoppingcart/removeProduct/${itemId}`;
  return axios.delete(url)
    .then(response => dispatch(removecartitemSuccess(response.data)))
    .catch(error => dispatch(removecartitemFailure(error)))
}
