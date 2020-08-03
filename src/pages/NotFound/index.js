import React from 'react';
import styled from 'styled-components';

import PageDefault from '../../components/PageDefault';

const Container = styled.div`
margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 500px;
    height: 482px;
  }
`;

function NotFound() {
  return (
    <PageDefault paddingAll={0}>
      <Container>
        <h1>Erro 404 - Página não encontrada!</h1>

        <img src="https://i.pinimg.com/originals/13/7c/a9/137ca9e2a4de70b11d0ae475997e8004.gif" alt="Lost John Travolta" />
      </Container>

    </PageDefault>
  );
}

export default NotFound;
