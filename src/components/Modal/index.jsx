import React, { useContext } from 'react';
import ButtonRegister from '../ButtonRegister';
import CheckButton from '../CheckButoon';
import vector from '../../images/vector.svg';
import Context from '../../context';
import { getCurrentDate, getDate } from '../../utils';
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
    const { dataAtual: currentDate, dia, mes } = getCurrentDate();
    const lastChange = getDate();
    const newDay = Number(dia);
    const newMonth = Number(mes);
    const newPrice = Number(price);

    const newArray = [
      ...dataArray,
      {
        name,
        price: newPrice,
        category,
        inputSelected,
        outputSelected,
        currentDate,
        day: newDay,
        month: newMonth,
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
            step='any'
            placeholder='Preço'
            onChange={(event) => setPrice(event.target.value.replace(',', '.'))}
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
