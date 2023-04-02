import { useEffect, useMemo, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { useAppSelector } from 'store';
import { IExpandedProducts } from 'types';
import { ProductTable, Title } from 'components';
import { getProductOption } from 'store/product/slice';

export const Products = () => {
  const products = useLoaderData() as IExpandedProducts[];
  const option = useAppSelector(getProductOption);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const valueSelect = useMemo(
    () =>
      products.reduce(
        (acc: string[], curr: IExpandedProducts) => {
          if (!acc.includes(curr.type)) {
            return [...acc, curr.type];
          }
          return acc;
        },
        ['']
      ),
    []
  );

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        option === '' ? product : product.type === option
      )
    );
  }, [option]);

  return (
    <>
      <Title
        isSelect
        text="Продукты"
        values={valueSelect}
        count={filteredProducts.length}
      />

      <ProductTable products={filteredProducts} />
    </>
  );
};
