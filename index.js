import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/global.css';

import { Home } from './pages/Home';
import { ContextProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <Home />
    </ContextProvider>
  </React.StrictMode>
);
