import { GET_ALL_PRODUCTS_SUCCESS, GET_ALL_PRODUCTS_FAILURE } from "./types";

import urlPath from '../Config/axios';
import generateUrlWithQuery from '../Utilis/serialize';


export const success = products => ({
  type: GET_ALL_PRODUCTS_SUCCESS,
  products
});
export const failure = error => ({
  type: GET_ALL_PRODUCTS_FAILURE,
  payload: error
});

export const getProducts = (queryParam) => (dispatch, getState) => {
  const { page, limit, description_length } = queryParam;
    const endpoint = generateUrlWithQuery(
      'https://backendapi.turing.com/products',
      {
        page,
        limit,
        description_length
      }
    );

  return urlPath
    .request({
      method: "get",
      url: endpoint
    })

    .then(response => {
   
      const { data, meta } = response;

      dispatch(success(data));
    })
    .catch(error => dispatch(failure(error)))
};
export default getProducts;
