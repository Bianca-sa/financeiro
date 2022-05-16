import React from 'react';
import './check-button.css';
import entrada from '../../images/entradas.svg';
import saida from '../../images/saidas.svg';

const CheckButton = ({ text, positive, onClick, selected }) => {
  return (
    <button
      className='check'
      type='button'
      onClick={onClick}
      style={
        selected
          ? {
              background: `${
                positive
                  ? 'hsla(147, 80%, 36%, 0.1)'
                  : 'hsla(350, 78%, 54%, 0.1)'
              }`,
            }
          : {}
      }
    >
      <img src={positive ? entrada : saida} alt='' />
      <span>{text}</span>
    </button>
  );
};

export default CheckButton;
