import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import styles from './app.module.scss';
import { favContext } from './context/favoriteContext'
import FavCount from './Components/FavoriteCount';
import FavList from './pages/favlist/favlist';

function App() {
  const state = useContext(favContext)

  return (
    <div className={styles.app}>

      <Router>
        <Route path="/" exact>
          <FavCount />
          <Home />
        </Route>
        <Route path="/favs" exact>
          <FavList />
        </Route>

      </Router>
    </div>
  );
}

export default App;
