import { Card } from "../components/Card"
import Formulario from "../components/Formulario"
import { ListaDeParticipantes } from "../components/ListaDeParticipantes"
import { Rodape } from "../components/Rodape"

const Configuracao = () => {
  return (
    <Card>
      <section>
        <Formulario />
        <ListaDeParticipantes />
        <Rodape />
      </section>
    </Card>
  )
}

export default Configuracao