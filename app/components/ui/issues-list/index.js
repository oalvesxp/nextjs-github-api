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
      flex: 1;
      margin-left: 12px;

      strong {
        font-size: 14px;

        a {
          text-decoration: none;
          color: #0089cc;

          &:hover {
            color: #f59e0b;
            transition: color 0.2s ease;
          }
        }

        span {
          background: #1f2937;
          color: #f4f4f9;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 400;
          padding: 3px 6px;
          margin-left: 6px;
        }
      }

      p {
        margin-top: 10px;
        font-size: 12px;

        font-weight: 500;
      }
    }
  }
`
