import { createGlobalStyle } from "styled-components";

/* CSS HEX */
// --blue: #3d5a80ff;
// --lightBlue: #98c1d9ff;
// --light-cyan: #e0fbfcff;
// --burnt-sienna: #ee6c4dff;
// --gunmetal: #293241ff;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    background: #98c1d9ff;
    color: #fff;
  }

  input, button {
    /* -webkit-font-smoothing: antialiased;
    font: 16px 'Indie Flower', sans-serif; */
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    height: 100vh;
  }
`;
