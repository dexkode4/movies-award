import React, { useContext, useEffect } from 'react';
import Home from './pages/home';
import styles from './app.module.scss';
import { favContext } from './context/favoriteContext'

function App() {
  const state = useContext(favContext)
  useEffect(() => {
    console.log('====================================');
    console.log({ ...state, size: state?.size });
    console.log('====================================');
  }, [state?.favorites])
  return (
    <div className={styles.app}>
      <Home />
    </div>
  );
}

export default App;
