import styled, { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GContainer = styled.div`
  &:not(.fullWidth) {
    max-width: 960px;
    margin: 0 auto;
  }
`;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    //overflow: -moz-scrollbars-none;
  }
  *::-webkit-scrollbar {
    display: none;
  }

  body {
    -webkit-font-smoothing: antialiased;
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Berlin Sans FB', sans-serif;
    background: ${colors.secondary};
    color: ${colors.white};
  }

  input, button {
    /* -webkit-font-smoothing: antialiased;
    font: 16px 'Indie Flower', sans-serif; */
  }

  button {
    cursor: pointer;
  }

  a {
    color: ${colors.white};
    text-decoration: none;
  }
`;
