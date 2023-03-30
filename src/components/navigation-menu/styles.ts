import styled from 'styled-components';

export const Block = styled.nav`
  width: 230px;
  height: 100%;
  box-shadow: 2px 2px 15px 3px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.white};
`;
