import styled, { css } from 'styled-components';

import { StyleType } from './types';

export const StyledButton = styled.button<{ styleType: StyleType }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 6px 16px;

  ${({ theme, styleType }) => {
    const buttonConfig = theme.colors.button[styleType];

    return css`
      color: ${buttonConfig.color};
      background-color: ${buttonConfig.bg};
      border-radius: 40px;

      > svg {
        width: 16px;
        path {
          fill: ${buttonConfig.icon};
        }
      }

      :hover {
        background-color: ${buttonConfig.hover};
        color: ${buttonConfig.colorHover};
      }
    `;
  }}
`;

export const Span = styled.span`
  font-size: 12px;
  text-transform: uppercase;
`;
