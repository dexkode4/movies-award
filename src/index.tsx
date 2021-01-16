import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FavContextProvider from './context/favoriteContext'
import './styles/generic.scss';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


ReactDOM.render(
  <FavContextProvider>
    <React.StrictMode>
      <App />
      <ToastContainer />
    </React.StrictMode>
  </FavContextProvider>,
  document.getElementById('root')
);