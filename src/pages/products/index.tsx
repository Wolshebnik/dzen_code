import { useLoaderData } from 'react-router-dom';

import { IExpandedProducts } from 'types';
import { ProductTable, Title } from 'components';

export const Products = () => {
  const products = useLoaderData() as IExpandedProducts[];

  return (
    <>
      <Title count={products.length} />

      <ProductTable products={products} />
    </>
  );
};
