import React from 'react';
import './card.css';
import entrada from '../../images/entradas.svg';
import saida from '../../images/saidas.svg';
import dolar from '../../images/total.svg';
import { formatNumber, getDates } from '../../utils';

const Card = ({ label, value, isTotal, output, lastChange }) => {
  const widhts = window.screen.width;
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
      {widhts <= 768 ? (
        <>
          <h2>{label}</h2>
          <img src={handleImg()} alt='' />
          <div>
            <span>{formatNumber(value)}</span>
            <p style={!isTotal && lastChange !== '' ? {} : { display: 'none' }}>
              Última {output ? 'saída' : 'entrada'} dia {lastChange}
            </p>
          </div>
        </>
      ) : (
        <>
          <h2>{label}</h2>
          <img src={handleImg()} alt='' />
          <span>{formatNumber(Number(value))}</span>
        </>
      )}
    </div>
  );
};

export default Card;
