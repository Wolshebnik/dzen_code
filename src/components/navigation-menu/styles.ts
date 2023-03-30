import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Block = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-top: 50px;
  width: 230px;
  height: 100%;
  box-shadow: 2px 2px 15px 3px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.white};
`;

export const LinksBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Link = styled(NavLink)`
  position: relative;
  text-transform: uppercase;
  font-weight: 500;

  ${({ theme }) => css`
    color: ${theme.colors.black};

    :after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      border: 2px solid ${theme.colors.header.textLogo};
      transform: scaleX(0);
      transition: all 300ms ease-in-out;
    }

    &.active {
      :after {
        transform: scaleX(1);
      }
    }
  `}
`;
