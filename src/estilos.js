import styled, { createGlobalStyle, css } from 'styled-components';

export const EstilosGlobais = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: #111827;
    background: #f3f4f6;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
  }
`;

export const Pagina = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 1rem;
`;

export const Cartao = styled.section`
  width: min(100%, 620px);
  background: #ffffff;
  border-radius: 16px;
  padding: 1.25rem;
  box-shadow: 0 20px 30px -24px rgb(17 24 39 / 0.5);
`;

export const Titulo = styled.h1`
  margin-top: 0;
  margin-bottom: 0.25rem;
`;

export const FormularioTarefa = styled.form`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const RotuloOculto = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const CampoTexto = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 10px;
`;

const estilosBaseBotao = css`
  border: 0;
  border-radius: 10px;
  padding: 0.7rem 0.95rem;
  font-weight: 600;
  cursor: pointer;
`;

export const BotaoPrimario = styled.button`
  ${estilosBaseBotao}
  background: #2563eb;
  color: white;
`;

export const GrupoFiltros = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

export const BotaoFiltro = styled.button`
  ${estilosBaseBotao}
  background: ${({ $ativo }) => ($ativo ? '#111827' : '#e5e7eb')};
  color: ${({ $ativo }) => ($ativo ? 'white' : '#111827')};
`;

export const GradeResumo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const ItemResumo = styled.p`
  margin: 0;
  padding: 0.75rem;
  border-radius: 10px;
  background: #eff6ff;
  text-align: center;
`;

export const ListaTarefas = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.6rem;
`;

export const EstadoVazio = styled.p`
  color: #6b7280;
`;

export const ItemTarefa = styled.li`
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.6rem;
`;

export const RotuloTarefa = styled.label`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const TextoTarefa = styled.span`
  ${({ $concluida }) =>
    $concluida &&
    css`
      text-decoration: line-through;
      color: #6b7280;
    `}
`;

export const BotaoPerigo = styled.button`
  ${estilosBaseBotao}
  background: #dc2626;
  color: white;
`;
