import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo65.png';

// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Reactflix logo"/>
      </Link>
      <Button className="ButtonLink" as={Link} to="/new/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;