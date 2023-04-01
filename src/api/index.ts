import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getOrders = () => {
  return instance.get('/orders').then(({ data }) => data);
};

export const getProducts = () => {
  return instance.get('/products').then(({ data }) => data);
};
