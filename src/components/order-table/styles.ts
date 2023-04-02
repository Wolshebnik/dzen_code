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

export const Element = styled.div<{ active: boolean; isDuration: boolean }>`
  position: relative;
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

  overflow: hidden;

  ${({ theme, active, isDuration }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.table.color};
    box-shadow: ${theme.shadow};
    border: 1px solid ${theme.colors.table.border};
    transition: ${theme.transition};

    ${active &&
    isDuration &&
    css`
      box-shadow: none;
      background-color: ${theme.colors.background};
    `}

    ${!isDuration &&
    css`
      :hover {
        cursor: pointer;
        box-shadow: none;
        background-color: ${theme.colors.background};
      }
    `}
  `}
`;

export const Chevron = styled.div<{ isDuration: boolean; active: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 80px;

  ${({ theme, isDuration, active }) => css`
    transition: ${theme.transition};
    transform: translateX(${active && isDuration ? 0 : 100}%);
    background-color: ${theme.colors.greyLighten};

    > svg {
      path {
        fill: ${theme.colors.white};
      }
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
