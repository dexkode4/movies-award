import React from 'react'
import styles from './FavoriteCount.module.scss';
import { FcLike } from 'react-icons/fc';

function FavCount() {
    return (
        <div className={styles.counter}>
            <FcLike />
        </div>
    )
}

export default FavCount
