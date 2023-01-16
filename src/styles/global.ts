import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    ${({ theme }) => css`
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: ${theme.font.family.primary};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    `}


    :is(::before, ::after) {
      box-sizing: inherit;
    }
  }
  html {
    font-size: 62.5%;
  }

  body {
    ${({ theme }) => css`
      background: ${theme.colors.blueDark};
    `}
  }
`;

export default GlobalStyles;
