import { formatDate } from 'utils';
import { EllipsisText } from 'components';

import * as Styles from './style';
import { IProductProps } from './type';

export const ProductTable = ({ products }: IProductProps) => {
  return (
    <Styles.Block>
      {products.map((product) => (
        <Styles.Element key={product.id}>
          <Styles.ProductName>
            <Styles.Image src={product.photo} alt="photo" />

            <Styles.Title>
              <EllipsisText>{product.title}</EllipsisText>
            </Styles.Title>
          </Styles.ProductName>

          <p>{product.type}</p>

          <Styles.Guarantee>
            <span>
              c&nbsp;
              <strong>{formatDate(product.guarantee.start)}</strong>
            </span>
            <span>
              по&nbsp;<strong>{formatDate(product.guarantee.end)}</strong>
            </span>
          </Styles.Guarantee>

          <Styles.Price>
            <span>
              {product.price?.find((p) => p.symbol === 'USD')?.value || 0} $
            </span>
            <span>
              {product.price?.find((p) => p.symbol === 'UAH')?.value || 0} UAH
            </span>
          </Styles.Price>

          <Styles.OrderName>
            <EllipsisText>{product.orderName}</EllipsisText>
          </Styles.OrderName>
        </Styles.Element>
      ))}
    </Styles.Block>
  );
};
