import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes"
import { useSorteador } from "../state/hook/useSorteador";
import { RodapeConfig } from "./Rodape.styled";

export const Rodape = () => {
  const participantes = useListaDeParticipantes();
  const navegarPara = useNavigate();
  const sortear = useSorteador();

  const iniciar = () => {
    sortear();
    navegarPara('/sorteios');
  }
  return (
    <RodapeConfig>
      <button 
        disabled={participantes.length < 3} 
        onClick={iniciar}
      >
        Iniciar brincadeira
      </button>
      <img src="/images/sacolas.png" alt="Sacolas de compras" />
    </RodapeConfig>
  )
}