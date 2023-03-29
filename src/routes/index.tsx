import { createBrowserRouter } from 'react-router-dom';

import { Layout } from 'pages/layout';
import { Groups, Receipts } from 'pages';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { element: <Receipts />, index: true },
      { element: <Groups />, path: 'groups' },
    ],
  },
]);
