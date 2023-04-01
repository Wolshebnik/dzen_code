import { createBrowserRouter } from 'react-router-dom';

import { getOrders, getProducts } from 'api';
import { Layout } from 'pages/layout';
import { Error, Orders, Products } from 'pages';

import { ROUTES } from './constants';

export const routes = createBrowserRouter([
  {
    path: ROUTES.orders,
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { element: <Orders />, index: true, loader: getOrders },
      { element: <Products />, path: ROUTES.products, loader: getProducts },
    ],
  },
]);
