import React, { useState, useRef } from 'react'
import styled from 'styled-components';
import { useAdicionarParticipante } from '../state/hook/useAdicionarParticipante';
import { useMensagemDeErro } from '../state/hook/useMensagemDeErro';
import { Card } from './Card';
import { AlertaErro, GrupoInputBtn } from './Formulario.style';

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
        <GrupoInputBtn>
          <input
            ref={inputRef}
            value={nome}
            onChange={event => setNome(event.target.value)}
            type="text"
            placeholder="Insira os nomes dos participantes"
          />
          <button disabled={!nome}>Adicionar</button>
        </GrupoInputBtn>
        {mensagemDeErro && 
          <AlertaErro role='alert'>{mensagemDeErro}</AlertaErro>}
      </form>
    </Card>
  )
}