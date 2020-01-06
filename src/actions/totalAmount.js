import axios from 'axios';

import {
    FETCH_TOTAL_AMOUNT_CART_SUCCESS, FETCH_TOTAL_AMOUNT_CART_FAILURE,
    FETCH_TOTAL_AMOUNT_CART_REQUEST
} from "./types";

const baseUrl =  'https://backendapi.turing.com';

export const fetchtotalAmountSuccess = (data) => ({
  type: FETCH_TOTAL_AMOUNT_CART_SUCCESS,
  data
});

export const fetchtotalAmountFailure = (errors) => ({
  type: FETCH_TOTAL_AMOUNT_CART_FAILURE,
  errors
});

export const fetchtotalAmountRequest = () => ({
  type: FETCH_TOTAL_AMOUNT_CART_REQUEST
});

const totalAmountActions = (cartId) => dispatch => {
  dispatch(fetchtotalAmountRequest());
  const url = `${baseUrl}/shoppingcart/totalAmount/${cartId}`;
  return axios(url)
    .then(response => dispatch(fetchtotalAmountSuccess(response.data)))
    .catch(error => dispatch(fetchtotalAmountFailure(error)))
}

export default totalAmountActions;
