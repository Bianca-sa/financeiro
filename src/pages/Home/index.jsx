import React from 'react';
import { Wrapper, Card } from '../../components';

import './styles.css';

export function Home() {
  return (
    <Wrapper>
      <div className='cards'>
        <Card label='Entrada' value='17.000' />
        <Card label='Saída' value='17.000' output />
        <Card label='Total' value='17.000' isTotal />
      </div>
    </Wrapper>
  );
}
