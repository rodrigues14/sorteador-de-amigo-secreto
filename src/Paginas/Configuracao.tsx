import { Card } from "../components/Card"
import Formulario from "../components/Formulario"
import { ListaDeParticipantes } from "../components/ListaDeParticipantes"
import { Rodape } from "../components/Rodape"
import { SectionConfig } from "./Configuracao.style"

const Configuracao = () => {
  return (
    <Card>
      <SectionConfig>
        <h2>Vamos começar!</h2>
        <Formulario />
        <ListaDeParticipantes />
        <Rodape />
      </SectionConfig>
    </Card>
  )
}

export default Configuracao