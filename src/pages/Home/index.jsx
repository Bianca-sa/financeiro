import React from 'react';
import { Wrapper, Card, Table } from '../../components';

import './styles.css';

export function Home() {
  return (
    <Wrapper>
      <div className='cards'>
        <Card label='Entrada' value='17.000' />
        <Card label='Saída' value='17.000' output />
        <Card label='Total' value='17.000' isTotal />
      </div>
      <Table></Table>
    </Wrapper>
  );
}
