import styled, { css } from 'styled-components';

export const Block = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 10px;
`;

export const ElementBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Element = styled.div<{ isDuration: boolean }>`
  display: grid;
  grid-template-columns:
    minmax(200px, 3fr) 40px minmax(80px, 0.5fr)
    minmax(120px, 1fr)
    minmax(120px, 1fr) 24px;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
  height: 80px;
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.table.color};
    box-shadow: ${theme.shadow};
    border: 1px solid ${theme.colors.table.border};
    transition: ${theme.transition};

    :hover {
      box-shadow: none;
      background-color: ${theme.colors.background};
    }
  `}
`;

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

export const DateBlock = styled.div`
  ${children};
`;

export const MoneyBlock = styled.div`
  ${children};
`;

export const DeleteBlock = styled.span`
  display: flex;
  cursor: pointer;
`;
