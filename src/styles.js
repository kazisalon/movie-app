import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, Arial, Helvetica,
    sans-serif;
}

/* Only chrome, firefox is bugged */
@supports (-webkit-appearance:none) and (not (overflow:-webkit-marquee)) and (not (-ms-ime-align:auto)) and (not (-moz-appearance:none)) {
  html{
    scroll-behavior: smooth;
  }
}
`;

export default GlobalStyle;
