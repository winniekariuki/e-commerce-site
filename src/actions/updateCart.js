import axios from 'axios';
import { UPDATE_ITEM_SUCCESS, UPDATE_ITEM_FAILURE, UPDATE_ITEM_REQUEST } from "./types";

const baseUrl = "https://backendapi.turing.com";

export const updateItemSuccess = (data) => ({
  type: UPDATE_ITEM_SUCCESS,
  data
});

export const updateItemFailure = (errors) => ({
  type: UPDATE_ITEM_FAILURE,
  errors
});

export const updateItemRequest = () => ({
  type: UPDATE_ITEM_REQUEST
});

const updateItemActions = (itemId, data) => dispatch => {
  dispatch(updateItemRequest());
  const url = `${baseUrl}/shoppingcart/update/${itemId}`;
  return axios.put(url, data)
    .then(response => dispatch(updateItemSuccess(response.data)))
    .catch(error => dispatch(updateItemFailure(error)))
}

export default updateItemActions;
