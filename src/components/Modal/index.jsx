import React from 'react';
import './modal.css';
import ButtonRegister from '../ButtonRegister';
import CheckButton from '../CheckButoon';
import vector from '../../images/vector.svg';

const Modal = () => {
  return (
    <div className='background-modal'>
      <div className='modal'>
        {/* <img src={vector} alt='Botão de fechar para sair do modal' /> */}
        <h2>Cadastrar transação</h2>
        <input type='text' placeholder='Nome' />
        <input type='number' placeholder='R$' />
        <div className='bt-conteiner'>
          <CheckButton
            text='Entrada'
            positive
            onClick={() => console.log('Entrada')}
          />
          <span></span>
          <CheckButton text='Saída' onClick={() => console.log('Saída')} />
        </div>
        <input type='text' placeholder='Categoria' />
        <ButtonRegister />
      </div>
    </div>
  );
};

export default Modal;
