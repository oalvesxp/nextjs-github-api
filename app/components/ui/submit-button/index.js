import styled from 'styled-components'

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background-color: #0d2636;
  border: 0;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
`
