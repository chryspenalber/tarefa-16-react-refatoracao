import { useTodos } from '../context/TodoContext';
import { BotaoPerigo, ItemTarefa, RotuloTarefa, TextoTarefa } from '../estilos';

export function TodoItem({ todo }) {
  const { toggleTodo, removeTodo } = useTodos();

  return (
    <ItemTarefa>
      <RotuloTarefa>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <TextoTarefa $concluida={todo.completed}>{todo.text}</TextoTarefa>
      </RotuloTarefa>
      <BotaoPerigo type="button" onClick={() => removeTodo(todo.id)} aria-label={`Remover ${todo.text}`}>
        Remover
      </BotaoPerigo>
    </ItemTarefa>
  );
}
