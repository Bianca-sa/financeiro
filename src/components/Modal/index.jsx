import React, { useState } from 'react';
import './modal.css';
import ButtonRegister from '../ButtonRegister';
import CheckButton from '../CheckButoon';
import vector from '../../images/vector.svg';

const Modal = () => {
  const [entradaSelected, setEntradaSeleted] = useState(false);
  const [saidaSelected, setSaidaSelected] = useState(false);

  const handleSubmit = (event) => {
    event.peventDefault();
  };

  return (
    <div className='background-modal'>
      <div className='modal'>
        <img
          className='vector'
          src={vector}
          alt='Botão de fechar para sair do modal'
        />
        <h2>Cadastrar transação</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Nome' />
          <input type='number' placeholder='Preço' />
          <div className='bt-conteiner'>
            <CheckButton
              text='Entrada'
              positive
              onClick={() => {
                setSaidaSelected(false);
                setEntradaSeleted(!entradaSelected);
              }}
              selected={entradaSelected}
            />
            <CheckButton
              text='Saída'
              onClick={() => {
                setEntradaSeleted(false);
                setSaidaSelected(!saidaSelected);
              }}
              selected={saidaSelected}
            />
          </div>
          <input type='text' placeholder='Categoria' />
          <ButtonRegister />
        </form>
      </div>
    </div>
  );
};

export default Modal;
