import React, { useState, useRef } from 'react'
import { useAdicionarParticipante } from '../state/hook/useAdicionarParticipante';
import { useMensagemDeErro } from '../state/hook/useMensagemDeErro';
import { Card } from './Card';

export default function Formulario() {

  const [nome, setNome] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarNaLista = useAdicionarParticipante();

  const mensagemDeErro = useMensagemDeErro();

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    adicionarNaLista(nome)
    setNome('');
    inputRef.current?.focus();
  }

  return (
    <Card>
      <form onSubmit={adicionarParticipante}>
        <input
          ref={inputRef}
          value={nome}
          onChange={event => setNome(event.target.value)}
          type="text"
          placeholder="Insira os nomes dos participantes"
        />
        <button disabled={!nome}>Adicionar</button>
        {mensagemDeErro && <p role='alert'>{mensagemDeErro}</p>}
      </form>
    </Card>
  )
}
