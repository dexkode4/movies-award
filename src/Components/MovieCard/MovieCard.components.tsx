import React from 'react'
import { FcLike } from 'react-icons/fc';
import { IMovie } from '../../interface';
import styles from './MovieCard.module.scss';


type AddToFavBtnProps = {
    movie: IMovie,
    addMovie: (D: IMovie) => void
}

export function AddToFavBtn({ movie, addMovie }: AddToFavBtnProps) {
    return (
        <div className={styles.favBtn} onClick={() => addMovie(movie)}>
            <FcLike />
        </div>
    )
}

