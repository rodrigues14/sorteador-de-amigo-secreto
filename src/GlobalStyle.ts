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
  h2 {
    font-weight: 600;
    font-size: 32px;
    margin-bottom: 36px;
    color: #4B69FD;
    text-align: center;
  }
`;