import { useTodos } from '../context/TodoContext';
import { GradeResumo, ItemResumo } from '../estilos';

export function TodoSummary() {
  const { todos } = useTodos();

  const completed = todos.filter((todo) => todo.completed).length;
  const pending = todos.length - completed;

  return (
    <GradeResumo>
      <ItemResumo>Total: {todos.length}</ItemResumo>
      <ItemResumo>Concluídas: {completed}</ItemResumo>
      <ItemResumo>Pendentes: {pending}</ItemResumo>
    </GradeResumo>
  );
}
