import React from 'react';
import './check-button.css';
import entrada from '../../images/entradas.svg';
import saida from '../../images/saidas.svg';

const CheckButton = ({ text, positive, onClick, seleceted }) => {
  const color = ({ clickEntrada, clickSaida }) => {
    if (clickEntrada) {
      return '#12A454';
    }
    if (clickSaida) {
      return '#E62E4D';
    } else {
      return '';
    }
  };

  return (
    <button
      className='check'
      type='button'
      onClick={onClick}
      // style={
      //   clickEntrada
      //     ? { background: '#12A454', color: '#FFFFFF' }
      //     : clickSaida
      //     ? { background: '#E62E4D', color: '#FFFFFF' }
      //     : {}
      // }
    >
      <img src={positive ? entrada : saida} alt='' />
      <span>{text}</span>
    </button>
  );
};

export default CheckButton;
