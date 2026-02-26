import { useTodos } from '../context/TodoContext';
import { BotaoFiltro, GrupoFiltros } from '../estilos';

const options = [
  { label: 'Todas', value: 'all' },
  { label: 'Concluídas', value: 'completed' },
  { label: 'Pendentes', value: 'pending' },
];

export function TodoFilters() {
  const { filter, setFilter } = useTodos();

  return (
    <GrupoFiltros role="group" aria-label="Filtrar tarefas">
      {options.map((option) => (
        <BotaoFiltro
          key={option.value}
          $ativo={filter === option.value}
          onClick={() => setFilter(option.value)}
          type="button"
        >
          {option.label}
        </BotaoFiltro>
      ))}
    </GrupoFiltros>
  );
}
