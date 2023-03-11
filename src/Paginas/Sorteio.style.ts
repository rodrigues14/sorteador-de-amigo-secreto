import styled from "styled-components";

export const FooterSorteio = styled.footer`
  margin: 64px 0;
  display: flex;
  justify-content: center;
`;

export const SectionSorteio = styled.section`
  select {
    margin-inline: auto;
    border-radius: 45px;
    height: 82px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 32px;
    font-size: 20px;
    border: 2px solid black;
    box-shadow: 0px 2px 0px 1px #000000;
    &:focus {
      outline: none;
    }
  }

  .instrucao {
    font-size: 20px;
    font-weight: 200;
    margin: 32px 0;
    max-width: 465px;
    text-align: center;
  }

  button {
    display: block;
    width: 350px;
    height: 80px;
    font-size: 20px;
    box-shadow: 2px 2px 0px 1px #000000;
    border-radius: 45px;
    background-color: #FE652B;
    color: #FFF;
    cursor: pointer;
    margin: 16px 0;
    margin-inline: auto;
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    &:hover {
      background-color: #4B69FD;
    }
    @media screen and (max-width: 800px) {
      width: 220px;
      margin: 32px auto;
    }
  }
`;

export const Resultado = styled.p`
  color: #FE652BFC;
  font-size: 30px;
  margin: 32px 0;
  text-align: center;
`;