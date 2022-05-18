import React, { useContext } from 'react';
import './modal.css';
import ButtonRegister from '../ButtonRegister';
import CheckButton from '../CheckButoon';
import vector from '../../images/vector.svg';
import Context from '../../context';
import vector2 from '../../images/vector2.svg';

const Modal = ({ openModal }) => {
  const {
    inputSelected,
    setInputSeleted,
    outputSelected,
    setOutputSelected,
    name,
    setName,
    price,
    setPrice,
    category,
    setCategory,
    dataArray,
    setOpenModal,
    setDataArray,
  } = useContext(Context);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newArray = [
      ...dataArray,
      {
        name,
        price,
        category,
      },
    ];
    setDataArray(newArray);
    return setOpenModal(false);
  };

  return (
    <div className='background-modal'>
      <div className='modal'>
        <img
          onClick={() => setOpenModal(false)}
          className='vector'
          src={vector}
          alt='Botão de fechar para sair do modal'
        />
        <h2>Cadastrar transação</h2>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Nome'
            onChange={(event) => setName(event.target.value)}
            required
          />
          <input
            type='number'
            placeholder='Preço'
            onChange={(event) => setPrice(event.target.value)}
            required
          />
          <div className='bt-conteiner'>
            <CheckButton
              text='Entrada'
              positive
              onClick={() => {
                setOutputSelected(false);
                setInputSeleted(!inputSelected);
              }}
              selected={inputSelected}
            />
            <CheckButton
              text='Saída'
              onClick={() => {
                setInputSeleted(false);
                setOutputSelected(!outputSelected);
              }}
              selected={outputSelected}
            />
          </div>
          <input
            type='text'
            placeholder='Categoria'
            onChange={(event) => setCategory(event.target.value)}
            required
          />
          <ButtonRegister />
        </form>
      </div>
    </div>
  );
};

export default Modal;
