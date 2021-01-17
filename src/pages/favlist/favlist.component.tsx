import React, { useContext } from 'react'
import styles from './fav.module.scss';
import { IMovie } from '../../interface';
import { FiTrash2 } from 'react-icons/fi';
import { RiDragMove2Line } from 'react-icons/ri';
import { favContext } from '../../context/favoriteContext';

export function MovieSummary({ movie }: { movie: IMovie }) {
    const state = useContext(favContext)
    return (
        <div className={styles.movieSummary}>
            <div className={styles.image}>
                <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className={styles.details}>
                <h2>
                    {movie.Title}
                </h2>
                <p>
                    {movie.Type}
                </p>
                <p>
                    {movie.Year}
                </p>
            </div>
            <div className={styles.removeBtn} onClick={() => state?.removeMovie(movie)}>
                <FiTrash2 />
            </div>

            <div className={styles.dragIcon}>
                {state?.size! > 1 ? <RiDragMove2Line /> : ""}
            </div>
        </div>
    )
}

