import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin:0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  html {
    background: #4B69FD;
    border: 2px solid black;
    min-height: 100vh;
  }
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;