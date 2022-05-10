import React from 'react';
import './card.css';
import entrada from '../../images/entradas.svg';
import saida from '../../images/saidas.svg';
import dolar from '../../images/total.svg';

const Card = () => {
  return (
    <div className='card'>
      <p>Entradas</p>
      <img src={entrada} alt='' />
      <span>R$17.400,00</span>
    </div>
  );
};

export default Card;
