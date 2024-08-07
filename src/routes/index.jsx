import { createBrowserRouter } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/Cadastro',
    element: <Register />,
  },
  {
    path: '/Home',
    element: <Home />,
  },
]);
