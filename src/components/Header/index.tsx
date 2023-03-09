import React from 'react'
import styled from 'styled-components'

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-around;
  padding-top: 120px;
  @media screen and (max-width: 800px) {
    padding-top: 60px;
    flex-direction: column;
    align-items: center;
  }
  div {
    background-image: url("/images/logo.png");
    width: 351px;
    height: 117px;
    @media screen and (max-width: 800px) {
      background-image: url("/images/logo-pequeno.png");
      width: 235px;
      height: 199px;
    }
  }
  img {
    z-index: 1;
  }
`;

export default function Header() {
  return (
    <HeaderStyled>
      <div role="img" aria-label='Logo do Sorteador'></div>
      <img src="/images/participante.png" alt="Participante com um presente na mão" />
    </HeaderStyled>
  )
}
