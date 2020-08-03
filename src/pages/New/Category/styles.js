import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 15px;
  width: 100%;
  border-collapse:separate;
  border-spacing:0 15px;

  th, td {
    padding: 5px 15px;
    background-color: #53585D;

  }

  td:last-child {
    text-align: center;
  }

  th:first-child, td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  th:last-child, td:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const CategoryColor = styled.div`
  border-radius: 10px;
  padding: 5px;
`;
