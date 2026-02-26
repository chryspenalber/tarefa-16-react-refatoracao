import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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

export const Page = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 1rem;
`;

export const Card = styled.section`
  width: min(100%, 620px);
  background: #ffffff;
  border-radius: 16px;
  padding: 1.25rem;
  box-shadow: 0 20px 30px -24px rgb(17 24 39 / 0.5);
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0.25rem;
`;

export const TodoFormContainer = styled.form`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const VisuallyHiddenLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const TextInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 10px;
`;

const buttonBaseStyles = css`
  border: 0;
  border-radius: 10px;
  padding: 0.7rem 0.95rem;
  font-weight: 600;
  cursor: pointer;
`;

export const PrimaryButton = styled.button`
  ${buttonBaseStyles}
  background: #2563eb;
  color: white;
`;

export const FilterGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

export const FilterButton = styled.button`
  ${buttonBaseStyles}
  background: ${({ $active }) => ($active ? '#111827' : '#e5e7eb')};
  color: ${({ $active }) => ($active ? 'white' : '#111827')};
`;

export const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const SummaryItem = styled.p`
  margin: 0;
  padding: 0.75rem;
  border-radius: 10px;
  background: #eff6ff;
  text-align: center;
`;

export const TodoListContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.6rem;
`;

export const EmptyState = styled.p`
  color: #6b7280;
`;

export const TodoItemContainer = styled.li`
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.6rem;
`;

export const TodoLabel = styled.label`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const TodoText = styled.span`
  ${({ $completed }) =>
    $completed &&
    css`
      text-decoration: line-through;
      color: #6b7280;
    `}
`;

export const DangerButton = styled.button`
  ${buttonBaseStyles}
  background: #dc2626;
  color: white;
`;
