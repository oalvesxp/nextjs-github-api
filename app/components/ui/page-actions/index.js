import styled from 'styled-components'

export const PageActions = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  button {
    outline: 0;
    border: 0;
    background-color: #1f2937;

    color: #f4f4f9;
    padding: 10px 20px;
    border-radius: 4px;
    transition: background-color 0.2s ease;

    &:hover {
      background: #0089cc;
    }
  }
`
