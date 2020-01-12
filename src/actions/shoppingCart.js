import axios from 'axios';

import { FETCH_SHOPPING_CART_SUCCESS, FETCH_SHOPPING_CART_FAILURE,FETCH_SHOPPING_CART_REQUEST } from "./types";

const baseUrl =  'https://backendapi.turing.com';

export const fetchshoppingcartSuccess = (data) => ({
  type: FETCH_SHOPPING_CART_SUCCESS,
  data
});

export const fetchshoppingcartFailure = (errors) => ({
  type: FETCH_SHOPPING_CART_FAILURE,
  errors
});

export const fetchshoppingcartRequest = () => ({
  type: FETCH_SHOPPING_CART_REQUEST
});

const shoppingcartActions = (cartId) => dispatch => {
  dispatch(fetchshoppingcartRequest());
    const url = `${baseUrl}/shoppingcart/${cartId}`;
    console.log("heey", cartId)
  return axios(url)
    .then(response => dispatch(fetchshoppingcartSuccess(response.data)))
    .catch(error => dispatch(fetchshoppingcartFailure(error)))
}

export default shoppingcartActions;
