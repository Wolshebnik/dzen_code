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
  overflow: hidden;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.table.color};
    box-shadow: ${theme.shadow};
    border: 1px solid ${theme.colors.table.border};
    transition: ${theme.transition};
  `}
`;

export const ProductName = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;
const children = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  > :first-child {
    font-size: 12px;
  }

  > :last-child {
    font-weight: 500;
  }
`;

export const Guarantee = styled.div`
  ${children};
`;

export const Price = styled.div`
  ${children};
`;

export const OrderName = styled.div`
  justify-self: center;
`;
