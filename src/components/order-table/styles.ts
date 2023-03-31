import styled, { css } from 'styled-components';

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Element = styled.div`
  display: grid;
  grid-template-columns: 3fr 40px 1fr 1fr 1fr 24px;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
  height: 80px;
  border-radius: 6px;
  cursor: pointer;

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.table.border};
    color: ${theme.colors.table.color};
    box-shadow: ${theme.shadow};
    transition: ${theme.transition};

    :hover {
      box-shadow: none;
    }
  `}
`;

export const Description = styled.div``;

export const BurgerBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.table.border};
  border-radius: 50%;
`;

export const CountProducts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Count = styled.span`
  font-size: 20px;

  & ~ span {
    font-size: 14px;
  }
`;

export const DateBlock = styled.div``;

export const MoneyBlock = styled.div``;

export const DeleteBlock = styled.span`
  display: flex;
  cursor: pointer;
`;
