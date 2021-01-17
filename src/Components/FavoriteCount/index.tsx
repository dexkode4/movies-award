import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import styles from './FavoriteCount.module.scss';
import { FcLike } from 'react-icons/fc';
import { favContext } from '../../context/favoriteContext';

function FavCount() {
    const history = useHistory();
    const state = useContext(favContext);

    return (
        <div className={styles.counter} onClick={() => history.push('/favs')}>
           <FcLike /> X{state?.size}
        </div>
    )
}

export default FavCount
