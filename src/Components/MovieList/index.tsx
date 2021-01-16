import React from 'react'
import MovieCard from '../MovieCard';
import styles from './MovieList.module.scss';
import { IMovie, IMovies } from '../../interface';
function MovieList({ movies }: IMovies) {
    return (
        <div className={styles.movielist}>
            {movies?.map((movie: IMovie, index) => (
                <MovieCard movie={movie} key={index} />
            ))}
        </div>
    )
}

export default MovieList
