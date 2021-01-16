import React from 'react';
import cx from 'classnames';
import { BsSearch } from 'react-icons/bs';
import styles from './SearchField.module.scss';

type SearchFieldType = {
    setQuery?: any
}

function SearchField({ setQuery }: SearchFieldType) {
    return (
        <div className={cx(styles.container)}>
            <BsSearch />
            <input placeholder='Search a movie' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)} />
        </div>
    )
}

export default SearchField
