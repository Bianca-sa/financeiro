import React from 'react';
import './modal.css';
import ButtonRegister from '../ButtonRegister';
import CheckButton from '../CheckButoon';
import vector from '../../images/vector.svg'

const Modal = () => {
  return (
    <div className='background-modal'>
      <div className='modal'>
        <h2>Cadastrar transação</h2>
        <input type='text' placeholder='Nome' />
        <input type='number' placeholder='R$' />
        <div className='bt-conteiner'>
          <CheckButton text='Entrada' positive />
          <span></span>
          <CheckButton text='Saída' />
        </div>
        <input type='text' placeholder='Categoria' />
        <ButtonRegister />
      </div>
    </div>
  );
};

export default Modal;
