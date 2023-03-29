import { createBrowserRouter } from 'react-router-dom';

import { Layout } from 'pages/layout';
import { Error, Groups, Receipts } from 'pages';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { element: <Receipts />, index: true },
      { element: <Groups />, path: 'groups' },
    ],
  },
]);
