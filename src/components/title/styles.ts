import styled from 'styled-components';

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 50px;
`;

export const Plus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.header.textLogo};
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.4);
`;
