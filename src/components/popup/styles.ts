import styled, { keyframes, css } from 'styled-components';

import { PopupStylesProps } from './types';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const scaleUp = keyframes`
  from {
    transform: scale(0);
  }

  to {
  transform: scale(1);
  }
`;

const scaleDown = keyframes`
  from {
    transform: scale(1);
  }

  to {
  transform: scale(0);
  }
`;

export const Overlay = styled.div<PopupStylesProps>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;

  ${({ isDelay, duration }) => css`
    animation: ${isDelay ? fadeIn : fadeOut} ${duration}ms linear;
    visibility: ${isDelay ? 'visible' : 'hidden'};
    transition: visibility ${duration}ms ease-out;
  `}
`;

export const PopupContainer = styled.div<PopupStylesProps>`
  position: relative;
  border-radius: 6px;

  ${({ theme, isDelay, duration }) => css`
    background-color: ${theme.colors.white};
    animation: ${isDelay ? scaleUp : scaleDown} ${duration}ms linear;
    visibility: ${isDelay ? 'visible' : 'hidden'};
    transition: visibility ${duration}ms ease-out;
  `}
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: -20px;
  right: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  ${({ theme }) => css`
    box-shadow: ${theme.shadow};
    transition: ${theme.transition};
  `}

  :hover {
    transform: rotate(90deg);
  }
`;
