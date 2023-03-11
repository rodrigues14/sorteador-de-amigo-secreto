import { useState } from "react"
import { Card } from "../components/Card";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes"
import { useResultadoSorteio } from "../state/hook/useResultadoSorteio";
import { FooterSorteio, Resultado, SectionSorteio } from "./Sorteio.style";


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
            <option>Selecione seu nome</option>
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