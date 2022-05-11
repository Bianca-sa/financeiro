import React from 'react';
import Header from '../Header';

import './wrapper.css';

const Wrapper = ({ children }) => {
  return (
    <div className='background'>
      <Header />
      <div className='content'>{children}</div>
    </div>
  );
};
export default Wrapper;
