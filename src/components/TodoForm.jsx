import { useState } from 'react';
import { useTodos } from '../context/TodoContext';
import {
  BotaoPrimario,
  CampoTexto,
  FormularioTarefa,
  RotuloOculto,
} from '../estilos';

export function TodoForm() {
  const { addTodo } = useTodos();
  const [text, setText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    addTodo(text);
    setText('');
  }

  return (
    <FormularioTarefa onSubmit={handleSubmit}>
      <RotuloOculto htmlFor="new-todo">Nova tarefa</RotuloOculto>
      <CampoTexto
        id="new-todo"
        type="text"
        placeholder="Digite uma tarefa..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <BotaoPrimario type="submit">Adicionar</BotaoPrimario>
    </FormularioTarefa>
  );
}
