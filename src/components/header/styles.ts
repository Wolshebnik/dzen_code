import styled, { css } from 'styled-components';

export const Block = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 200px;
  height: 80px;
  z-index: 10;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadow};
  `}
`;

export const TextLogo = styled.h3`
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.header.textLogo};
`;

export const TimeBlock = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
`;

export const Week = styled.p`
  text-transform: capitalize;
`;

export const DateBlock = styled.div`
  display: flex;
  gap: 10px;
`;

export const Date = styled.p`
  text-transform: capitalize;
`;
