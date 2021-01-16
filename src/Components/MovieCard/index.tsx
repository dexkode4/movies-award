import React, { useContext, useState } from 'react'
import cx from 'classnames';
import styles from './MovieCard.module.scss';
import { AddToFavBtn } from './MovieCard.components';
import { favContext } from '../../context/favoriteContext';
import { IMovie } from '../../interface';


function MovieCard({ movie }: { movie: IMovie }) {
    const [isSlide, setIsSlide] = useState(false);
    const state = useContext(favContext);
    return (
        <div className={cx(styles.moviecard, isSlide && styles.slide)} onClick={() => setIsSlide(!isSlide)}>
            <div className={styles.moviecardImage} style={{
                backgroundImage: `url(${movie.Poster})`
            }} />

            <div className={styles.moviecardInfo}>
                <div className={styles.footer}>
                    <p className={styles.title}>{movie.Title}</p>
                    <AddToFavBtn movie={movie} addMovie={state?.addMovie} />
                </div>
            </div>
        </div>
    )
}

export default MovieCard
