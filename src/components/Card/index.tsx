import React from 'react'
import styled from 'styled-components'

const CardStyled = styled.div`
  background: #FFF9EB;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 64px 64px 0px 0px;
  padding: 80px;
  display: flex;
  flex: 1;
  margin-top: -32px;
  justify-content: center;
  @media screen and (max-width: 500px) {
    padding: 80px 20px;
    }
`;

export const Card: React.FC = ({ children }) => {
  return (
    <CardStyled>
      {children}
    </CardStyled>
  )
}
