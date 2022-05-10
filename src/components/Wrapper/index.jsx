import React from 'react';

import './wrapper.css';

const Wrapper = ({ children }) => {
  return (
    <div className='background'>
      <div className='content'>{children}</div>
    </div>
  );
};

export default Wrapper;
