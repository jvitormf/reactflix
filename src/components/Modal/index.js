import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '../Button';

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;

  right: 0;
  left: 0;
  top: 0;
  bottom: 0;

  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.9);

  z-index: 2;

  strong {
    padding: 20px;
    border-radius: 10px;
    border: 2px solid #61dafb;
    margin: 10px;
    color: #fff;
    font-size: 24px;
    line-height: 30px;
  }
`;

function Modal() {
  return (
    <Container>
      <strong>Categoria cadastrada com sucesso!</strong>
    </Container>
  );
}

export default Modal;
