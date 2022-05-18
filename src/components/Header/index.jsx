import React, { useContext } from 'react';
import Button from '../Button';
import Context from '../../context'
import './header.css';
import logo from '../../images/logo.svg';

const Header = () => {
  const {
    setOpenModal
  } = useContext(Context)

  return (
    <div className='header'>
      <img src={logo} alt='Imagem do logo escrito dt money' />
      <Button onClick={() => setOpenModal(true)}/>
    </div>
  );
};

export default Header;
