import React from 'react';
import './check-button.css';
import entrada from '../../images/entradas.svg';
import saida from '../../images/saidas.svg';

const CheckButton = ({ text, positive }) => {
  return (
    <button className='check' type='button'>
      <img src={positive ? entrada : saida} alt='' />
      <span>{text}</span>
    </button>
  );
};

export default CheckButton;
