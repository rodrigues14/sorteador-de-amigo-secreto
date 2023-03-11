import { useState } from "react"
import styled from "styled-components";
import { Card } from "../components/Card";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes"
import { useResultadoSorteio } from "../state/hook/useResultadoSorteio";


const Sorteio = () => {
  const participantes = useListaDeParticipantes()

  const [participanteDaVez, setParticipanteDaVez] = useState('');
  const [amigoSecreto, setAmigoSecreto] = useState('');

  const resultado = useResultadoSorteio();

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
    }
  }

  return (
    <Card>
      <SectionSorteio>
        <h2>Quem vai tirar o papelzinho?</h2>
        <form onSubmit={sortear}>
          <select
            required
            name="participanteDaVez"
            id="participanteDaVez"
            placeholder="Selecione o seu nome"
            value={participanteDaVez}
            onChange={evento => setParticipanteDaVez(evento.target.value)}
          >
            <option></option>
            {participantes.map(participante => (
              <option key={participante}>{participante}</option>
            ))}
          </select>
          <p className="instrucao">Clique em em sortear para ver quem é seu amigo secreto!</p>
          <button>Sortear</button>
        </form>
        {amigoSecreto && <Resultado role='alert'>{amigoSecreto}</Resultado>}
        <FooterSorteio>
          <img src="/images/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
        </FooterSorteio>
      </SectionSorteio>
    </Card>
  )
}

export default Sorteio

const FooterSorteio = styled.footer`
  margin: 64px 0;
  display: flex;
  justify-content: center;
`;

const SectionSorteio = styled.section`
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

const Resultado = styled.p`
  color: #FE652BFC;
  font-size: 30px;
  margin: 32px 0;
  text-align: center;
`;