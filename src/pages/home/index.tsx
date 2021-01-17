import React, { useEffect, useState } from 'react'
import { HalfCircleSpinner } from 'react-epic-spinners'
import styles from './home.module.scss';
import SearchField from '../../Components/SearchField';
import MovieList from '../../Components/MovieList';
import { getMovies } from '../../API';


function useDebounce(value: string, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
        () => {
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);
            return () => {
                clearTimeout(handler);
            };
        },
        [value,delay]
    );
    return debouncedValue;
}

function Home() {
    const [responseData, setResponseData] = useState([]);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const debouncedSearchTerm = useDebounce(query, 1000);

    useEffect(() => {

        if (debouncedSearchTerm) {
            setIsLoading(true)
            getMovies(query).
                then(({ Search }) => {
                    setResponseData(Search)
                    setIsLoading(false)
                })
        }
        else {
            setResponseData([]);
        }

    }, [debouncedSearchTerm])

    return (
        <div className={styles.home}>
            <SearchField setQuery={setQuery} />
            {isLoading ? <div className={styles.loader}><HalfCircleSpinner color="red" /> </div> : <MovieList movies={responseData} />}
        </div>
    )
}

export default Home
