import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FavContextProvider from './context/favoriteContext'
import './styles/generic.scss';

ReactDOM.render(
  <FavContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FavContextProvider>,
  document.getElementById('root')
);