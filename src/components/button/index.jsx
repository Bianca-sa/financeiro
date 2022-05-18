import React from 'react';
import './button.css';

const Button = ({ onClick }) => (
  <buton className='newTrasition' onClick={onClick}>
    Nova transação
  </buton>
);

export default Button;
