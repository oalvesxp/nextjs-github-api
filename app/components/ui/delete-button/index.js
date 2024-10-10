import styled from 'styled-components'

export const DeleteButton = styled.button.attrs({
  type: 'button',
})`
  background: transparent;
  color: #1f2937;
  border: 0;
  padding: 8px 8px;
  outline: 0;
  border-radius: 4px;
  margin-right: 10px;

  &:hover {
    background-color: #ef4444;
    color: #fafafa;
    transition: background-color 0.2s ease;
  }
`
