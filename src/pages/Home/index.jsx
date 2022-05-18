import React, { useContext } from 'react';
import { Wrapper, Card, Table, Modal } from '../../components';
import Context from '../../context';

import './styles.css';

export function Home() {
  const { openModal } = useContext(Context);

  return (
    <Wrapper>
      <div className='cards'>
        <Card label='Entrada' value='17.000,00' />
        <Card label='Saída' value='17.000' output />
        <Card label='Total' value='17.000' isTotal />
      </div>
      <Table />
      {openModal && <Modal />}
    </Wrapper>
  );
}
