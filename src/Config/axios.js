import axios from 'axios';

const BASE_URL = 'https://backendapi.turing.com/';
const urlPath = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default urlPath;