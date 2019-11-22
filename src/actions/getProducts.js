import { GET_ALL_PRODUCTS_SUCCESS, GET_ALL_PRODUCTS_FAILURE } from "./types";

import urlPath from '../Config/axios';

export const getAllProductsAction = () => ({ type: GET_ALL_PRODUCTS_SUCCESS });
export const success = products => ({
  type: GET_ALL_PRODUCTS_SUCCESS,
  products
});
export const failure = error => ({
  type: GET_ALL_PRODUCTS_FAILURE,
  payload: error
});

export const getProducts = () => dispatch => {
  const endpoint = `https://backendapi.turing.com/products`;

  return urlPath
    .request({
      method: "get",
      url: endpoint
    })

    .then(response => {
   
      const { data } = response;
      
      const type = GET_ALL_PRODUCTS_SUCCESS;

      dispatch(success(data, type));
    })
    .catch(error => {
      dispatch(error.response.data.message, "danger");
    });
};
export default getProducts;
