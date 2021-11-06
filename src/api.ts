import axios from 'axios';

export const createApi = () => {
  const api = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/photos',
    timeout: 5000,
  });

  return api;
};
