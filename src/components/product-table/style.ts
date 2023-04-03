import styled, { css } from 'styled-components';

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Element = styled.div`
  position: relative;
  display: grid;
  grid-template-columns:
    minmax(130px, 1fr) minmax(130px, 0.5fr) minmax(130px, 1fr)
    minmax(130px, 0.5fr) minmax(130px, 0.5fr);

  align-items: center;
  gap: 10px;
  padding: 0 20px;
  height: 80px;
  border-radius: 6px;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.table.color};
    box-shadow: ${theme.shadow};
    border: 1px solid ${theme.colors.table.border};
  `}
`;

export const ProductName = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;

export const Title = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Guarantee = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    font-size: 12px;
  }
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    font-size: 12px;
  }

  > :last-child {
    font-weight: 500;
  }
`;

export const OrderName = styled.div`
  justify-self: center;
  width: 100%;
`;
