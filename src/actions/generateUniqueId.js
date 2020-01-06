import axios from 'axios';
import { FETCH_GENERATE_UNIQUE_CART_ID_SUCCESS, FETCH_GENERATE_UNIQUE_CART_ID_FAILURE, FETCH_GENERATE_UNIQUE_CART_ID_REQUEST } from './types';

import * as accessCart from '../Utilis/cart';

const baseUrl = 'https://backendapi.turing.com';

export const generateSuccess = (data) => ({
  type: FETCH_GENERATE_UNIQUE_CART_ID_SUCCESS,
  data
});

export const generateFailure = (errors) => ({
  type: FETCH_GENERATE_UNIQUE_CART_ID_FAILURE,
  errors
});

export const generateRequest = () => ({
  type: FETCH_GENERATE_UNIQUE_CART_ID_REQUEST
});

const generateActions = () => dispatch => {
  dispatch(generateRequest());
  const url = `${baseUrl}/shoppingcart/generateUniqueId`;
  return axios(url)
    .then(response => {
      const cartId = response.data.cart_id;
      if (!accessCart.getGeneratedCartId()) {
        accessCart.setGeneratedCartId(cartId);
      }
      dispatch(generateSuccess(response.data))
    })
    .catch(error => dispatch(generateFailure(error)))
}

export default generateActions;
