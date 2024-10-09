import styled from 'styled-components'

export const List = styled.ul`
  list-style: none;
  margin-top: 20px;

  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;

    & + li {
      border-top: 1px solid #bdbdbd;
    }

    .list__repo_name {
      flex: 1;
      text-align: left;
    }

    .list__icon_detail {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #1f2937;

      &:hover {
        color: #f59e0b;
        transition: color 0.2s ease;
      }
    }
  }
`
