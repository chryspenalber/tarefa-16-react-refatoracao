import { createContext, useContext, useMemo, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = createContext(null);

export function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage('advanced-todos', []);
  const [filter, setFilter] = useState('all');

  function addTodo(text) {
    const normalizedText = text.trim();
    if (!normalizedText) return;

    const newTodo = {
      id: Date.now(),
      text: normalizedText,
      completed: false,
    };

    setTodos((previousTodos) => [newTodo, ...previousTodos]);
  }

  function toggleTodo(id) {
    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function removeTodo(id) {
    setTodos((previousTodos) => previousTodos.filter((todo) => todo.id !== id));
  }

  const filteredTodos = useMemo(() => {
    if (filter === 'completed') return todos.filter((todo) => todo.completed);
    if (filter === 'pending') return todos.filter((todo) => !todo.completed);
    return todos;
  }, [filter, todos]);

  const value = {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    removeTodo,
    filteredTodos,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export function useTodos() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('useTodos deve ser usado dentro de TodoProvider');
  }

  return context;
}
