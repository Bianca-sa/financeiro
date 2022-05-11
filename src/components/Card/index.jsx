import React from 'react';
import './card.css';
import entrada from '../../images/entradas.svg';
import saida from '../../images/saidas.svg';
import dolar from '../../images/total.svg';

const Card = ({ label, value, isTotal, output }) => {
  const handleImg = () => {
    if (isTotal) {
      return dolar;
    }
    if (output) {
      return saida;
    } else {
      return entrada;
    }
  };

  return (
    <div
      className='card'
      style={isTotal ? { background: '#33CC95', color: '#FFFFFF' } : {}}
    >
      <p>{label}</p>
      <img src={handleImg()} alt='' />
      <span>R${value}</span>
    </div>
  );
};

export default Card;
