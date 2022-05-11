import React from 'react';
import Button from '../Button';

import './header.css';

import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='Imagem do logo escrito dt money' />
      <Button />
    </div>
  );
};

export default Header;
