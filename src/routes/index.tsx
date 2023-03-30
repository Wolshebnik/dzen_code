import { createBrowserRouter } from 'react-router-dom';

import { Layout } from 'pages/layout';
import { Error, Groups, Receipts } from 'pages';

import { ROUTES } from './constants';

export const routes = createBrowserRouter([
  {
    path: ROUTES.receipts,
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { element: <Receipts />, index: true },
      { element: <Groups />, path: ROUTES.groups },
    ],
  },
]);
