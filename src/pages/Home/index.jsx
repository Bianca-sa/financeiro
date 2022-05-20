import React, { useContext } from 'react';
import { Wrapper, Card, Table, Modal } from '../../components';
import Context from '../../context';
import './styles.css';
import { sumArrayValues, filterArray, getDate } from '../../utils';

export function Home() {
  const { openModal, dataArray } = useContext(Context);

  const inputDayArr = filterArray(dataArray, 'inputSelected', 'day');
  const outputDayArr = filterArray(dataArray, 'outputSelected', 'day');
  const inputMonthArr = filterArray(dataArray, 'inputSelected', 'month');
  const outputMonthArr = filterArray(dataArray, 'outputSelected', 'month');
  const lastInputDay = inputDayArr[inputDayArr.length - 1];
  const lastInputMonth = inputMonthArr[inputMonthArr.length - 1];
  const lastOutputDay = outputDayArr[outputDayArr.length - 1];
  const lastOutputMonth = outputMonthArr[outputMonthArr.length - 1];

  const inputLastModifiedMonth = getDate(lastInputDay, lastInputMonth);
  const outputLastModifiedMonth = getDate(lastOutputDay, lastOutputMonth);

  const inputPriceArr = filterArray(dataArray, 'inputSelected', 'price');
  const outputPriceArr = filterArray(dataArray, 'outputSelected', 'price');

  const inputValue = sumArrayValues(inputPriceArr);
  const outputValue = sumArrayValues(outputPriceArr);
  const totalValue = inputValue - outputValue;

  return (
    <Wrapper>
      <div className='cards'>
        <Card
          label='Entrada'
          value={inputValue}
          lastChange={inputLastModifiedMonth}
        />
        <Card
          label='Saída'
          value={outputValue}
          lastChange={outputLastModifiedMonth}
          output
        />
        <Card label='Total' value={totalValue} isTotal />
      </div>
      <Table />
      {openModal && <Modal />}
    </Wrapper>
  );
}
