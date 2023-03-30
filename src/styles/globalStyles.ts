import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  html {
    height: 100%;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    line-height: 24px;
  }

  body {
    overflow-x: hidden;
    overflow-y: hidden;
    font-size: 16px;
    font-weight: 400;
    height: 100%;

    ${({ theme }) => css`
      color: ${theme.colors.black};
      background-color: ${theme.colors.background};
    `}
  }

  #root {
    height: 100%;
  }

  a {
    text-decoration: none;
    line-height: 24px;
    font-size: 16px;
    font-weight: 400;
    outline: none;
  }

  ul {
    list-style-type: none;
  }

  button {
    border: none;
    background-color: inherit;
    cursor: pointer;
    font-weight: 500;
    color: inherit;
    line-height: inherit;
  }

  input {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: inherit;
  }

  h1 {
    font-size: 32px;
    line-height: 48px;
    font-weight: 700;
    margin: 0;
  }
`;

export { GlobalStyles };
