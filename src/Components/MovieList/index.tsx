import React from 'react'
import MovieCard from '../MovieCard';
import styles from './MovieList.module.scss';

export interface IMovie {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}

interface IMovies {
    movies: IMovie[]
}

function MovieList({ movies }: IMovies) {
    return (
        <div className={styles.movielist}>
            {movies.map((movie: IMovie) => (
               <MovieCard imgUrl={movie.Poster}/>
            ))}
        </div>
    )
}

export default MovieList
