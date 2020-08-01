import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function Video(){
  return (
    <PageDefault>
      <h1>Cadastro de vídeo!</h1>

      <Link to="/new/category">
        Cadastro de categoria!
      </Link>
    </PageDefault>
  );
}

export default Video;