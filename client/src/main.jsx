import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { RouterProvider } from 'react-router-dom';
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={App} />
  </React.StrictMode>
);
