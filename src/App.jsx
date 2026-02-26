import { TodoFilters } from './components/TodoFilters';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { TodoSummary } from './components/TodoSummary';
import { Cartao, Pagina, Titulo } from './estilos';

function App() {
  return (
    <Pagina>
      <Cartao>
        <Titulo>Lista de tarefas</Titulo>
        <TodoForm />
        <TodoFilters />
        <TodoSummary />
        <TodoList />
      </Cartao>
    </Pagina>
  );
}

export default App;
