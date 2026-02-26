# todo-react-avancado

Aplicação de lista de tarefas em React com Hooks, Context API e persistência local.

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- Styled Components (CSS-in-JS)

## O que foi refatorado nos estilos

- Estilos antigos em CSS externo foram removidos.
- A aplicação passou a usar **Styled Components** para estilização.
- Foi criado o arquivo `src/estilos.js` com:
  - estilos globais (`EstilosGlobais`);
  - componentes visuais reutilizáveis (botões, formulário, lista, resumo e layout).
- Os componentes da interface (`App`, `TodoForm`, `TodoFilters`, `TodoSummary`, `TodoList` e `TodoItem`) agora aplicam estilos por meio desses componentes estilizados.
- A lógica da aplicação (estado, filtros, contexto e ações) foi mantida.

## Funcionalidades

- Adicionar nova tarefa
- Marcar tarefa como concluída
- Remover tarefa
- Filtrar tarefas por:
  - Todas
  - Concluídas
  - Pendentes
- Persistência no `localStorage`

## Conceitos aplicados

- `useState` para estado de tarefas, filtros e formulário.
- `useEffect` dentro do hook customizado para salvar no `localStorage`.
- `Context API` + `useContext` para compartilhar estado global.
- Hook customizado `useLocalStorage`.
- `useMemo` para filtrar tarefas sem recalcular desnecessariamente.

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois, abra o endereço informado pelo Vite (geralmente `http://localhost:5173`).
