import styled from 'styled-components'

export const IssuesFilter = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    outline: 0;
    border: 0;
    padding: 8px;
    border-radius: 4px;
    margin: 0 4px;
    background: #d1d5db;

    &:nth-child(${(props) => props.active + 1}) {
      background: #15b47a;
      color: #f4f4f9;
    }
  }
`
