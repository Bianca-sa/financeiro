import React, { useContext } from 'react';
import ButtonRegister from '../ButtonRegister';
import CheckButton from '../CheckButoon';
import vector from '../../images/vector.svg';
import Context from '../../context';
import { getCurrentDate, formatNumber } from '../../utils';
import './modal.css';

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
    const currentDate = getCurrentDate();
    const newArray = [
      ...dataArray,
      {
        name,
        price,
        category,
        inputSelected,
        outputSelected,
        currentDate,
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
            onChange={(event) => setPrice(event.target.value.replace(',', '.'))}
            value={price}
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
