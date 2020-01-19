import {SEARCH_SUCCESS,SEARCH_FAILURE, SEARCH_REQUEST } from "./types";
import axios from 'axios';
import urlPath from '../Config/axios';
import generateUrlWithQuery from '../Utilis/serialize';

export const searchRequest = () => ({
  type: SEARCH_REQUEST
});
export const searchSuccess = products => ({
  type:SEARCH_SUCCESS,
  products
});
export const searchFailure = error => ({
  type:SEARCH_FAILURE,
  payload: error
});

const searchActions = (query) => (dispatch) => {

  dispatch(searchRequest());
  const url =
    `https://backendapi.turing.com/products/search?query_string=${query}&page=1&limit=20`;
  return axios(url)
    .then(response => {
      const { data } = response;
      dispatch(searchSuccess(data))
    })

    .catch(error => dispatch(searchFailure(error)))
}

export default searchActions;
