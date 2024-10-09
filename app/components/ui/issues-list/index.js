import styled from 'styled-components'

export const IssuesList = styled.ul`
  margin-top: 20px;
  padding-top: 30px;
  border-top: 1px solid #bdbdbd;
  list-style: none;

  li {
    display: flex;
    padding: 14px 10px;

    & + li {
      border-top: 1px solid #bdbdbd;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50px;
      border: 1px solid #1f2937;
    }

    div {
      display: flex;
      margin-left: 10px;
    }

    strong {
      font-size: 14px;

      a {
        text-decoration: none;
        color: #0089cc;
      }
    }
  }
`
