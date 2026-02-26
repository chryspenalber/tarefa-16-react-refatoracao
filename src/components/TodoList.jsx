import { useTodos } from '../context/TodoContext';
import { EstadoVazio, ListaTarefas } from '../estilos';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const { filteredTodos } = useTodos();

  if (filteredTodos.length === 0) {
    return <EstadoVazio>Nenhuma tarefa encontrada para este filtro.</EstadoVazio>;
  }

  return (
    <ListaTarefas>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ListaTarefas>
  );
}
