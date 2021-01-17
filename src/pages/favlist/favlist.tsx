import React, { useContext } from 'react'
import { DragDropContext } from 'react-beautiful-dnd';
import { favContext } from '../../context/favoriteContext';
import styles from './fav.module.scss';
import { MovieSummary } from './favlist.component';

function FavList() {
    const state = useContext(favContext);
    return (
        <div className={styles.favlist}>

            <header className={styles.header}>
                {state?.size ? <h1>nominations</h1> : <h1>You have no nomination</h1>}
            </header>
            {state?.favorites.map((movie) => (
                <MovieSummary movie={movie} />
            ))}
        </div>
    )
}

export default FavList
