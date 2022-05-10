import React from 'react';
import { Wrapper, Card } from '../../components';

import './styles.css';

export function Home() {
  return (
    <Wrapper>
      <div className='cards'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <header>
        {/* <h1>ola</h1> */}
        {/* <div className='logo'>
          <img src='dev.finances.svg' alt='Logo da página' />
          <img src='$.svg' alt=]
          'Um $ que complementa o logo' />
        </div> */}
      </header>
    </Wrapper>
  );
}
