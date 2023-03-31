import styled, { css } from 'styled-components';

import { IAvatarStyle } from './types';

export const AvatarBlock = styled.div<IAvatarStyle>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
  `}
`;

export const Image = styled.img<{ isLoading: boolean }>`
  display: ${({ isLoading }) => (isLoading ? 'none' : 'block')};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const Circle = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadow};
  `}
`;
