import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TodoProvider } from './context/TodoContext';
import { EstilosGlobais } from './estilos';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoProvider>
      <EstilosGlobais />
      <App />
    </TodoProvider>
  </React.StrictMode>,
);
