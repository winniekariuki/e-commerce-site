import axios from 'axios';
import { ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE } from './types';

const baseUrl = 'https://backendapi.turing.com';

export const addtocartRequest = () => ({
  type: ADD_TO_CART_REQUEST
});

export const addtocartSuccess = (data) => ({
  type: ADD_TO_CART_SUCCESS,
  data
});

export const addtocartFailure = (errors) => ({
  type: ADD_TO_CART_FAILURE,
  errors
});

const addtocartActions = (data) => dispatch => {
  dispatch(addtocartRequest());
  const url = `${baseUrl}/shoppingcart/add`;
  return axios.post(url, data)
      .then(response => dispatch(addtocartSuccess(response.data)))
      .catch(error => dispatch(addtocartFailure(error)));
}

export default addtocartActions;
