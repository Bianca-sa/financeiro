import React, { useContext, useState } from 'react';
import { Wrapper, Card, Table, Modal } from '../../components';
import Context from '../../context';
import './styles.css';
import { sumArrayValues, filterArray } from '../../utils';

export function Home() {
  const { openModal, dataArray } = useContext(Context);

  const inputArr = filterArray(dataArray, 'inputSelected');
  const outputArr = filterArray(dataArray, 'outputSelected');

  const inputValue = sumArrayValues(inputArr);
  const outputValue = sumArrayValues(outputArr);
  const totalValue = inputValue - outputValue;

  return (
    <Wrapper>
      <div className='cards'>
        <Card label='Entrada' value={inputValue} />
        <Card label='Saída' value={outputValue} output />
        <Card label='Total' value={totalValue} isTotal />
      </div>
      <Table />
      {openModal && <Modal />}
    </Wrapper>
  );
}
