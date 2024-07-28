import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import { Home } from './pages/Login/index';
import GlobalStyles from './styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <GlobalStyles />
    <ToastContainer theme="colored" />
  </React.StrictMode>,
);
