import axios from 'axios';
import { BASE_URL } from '../actions/types';

const token = localStorage.getItem('token');
const urlPath = axios.create({
  baseURL: `${BASE_URL}/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default urlPath;