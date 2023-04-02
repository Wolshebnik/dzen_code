import axios from 'axios';

const dzen = axios.create({
  baseURL: 'http://localhost:7000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getOrders = () => dzen.get('/orders').then(({ data }) => data);

export const getProducts = () => dzen.get('/products').then(({ data }) => data);

export const deleteProduct = (id: number) =>
  dzen.delete(`/products/${id}`).then(({ data }) => data);
