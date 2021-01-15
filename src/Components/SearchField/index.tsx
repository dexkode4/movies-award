import React from 'react';
import cx from 'classnames';
import { BsSearch } from 'react-icons/bs';
import styles from './SearchField.module.scss';

type SearchFieldType = {
    placeholder: string,
    handleChange?: any
}

function SearchField({ placeholder, handleChange }: SearchFieldType) {
    return (
        <div className={cx(styles.container)}>
            <BsSearch />
            <input placeholder={placeholder} onChange={handleChange} />
        </div>
    )
}

export default SearchField
