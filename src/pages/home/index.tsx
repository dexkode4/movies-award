import React, { useEffect, useState } from 'react'
import styles from './home.module.scss';
import SearchField from '../../Components/SearchField';
import MovieList from '../../Components/MovieList';
import { getMovies } from '../../API';

function Home() {
    const [responseData, setResponseData] = useState([]);
    useEffect(() => {
        getMovies("venom").
            then(({ Search }) => {
                setResponseData(Search)
            })
    }, [])

    return (
        <div className={styles.home}>
            <SearchField placeholder="Search movie" />
            <MovieList movies={responseData} />
        </div>
    )
}

export default Home
