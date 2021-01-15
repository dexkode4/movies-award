import React, { useState } from 'react'
import cx from 'classnames';
import styles from './MovieCard.module.scss';


interface IImage {
    imgUrl : string
}


function MovieCard({imgUrl}:IImage) {
    const [isSlide, setIsSlide] = useState(false);
    return (
        <div className={cx(styles.moviecard, isSlide && styles.slide)} onClick={() => setIsSlide(!isSlide)}>
            <div className={styles.moviecardImage}>
                <img src={imgUrl}/>
            </div>
            <div className={styles.moviecardInfo}></div>
        </div>
    )
}

export default MovieCard
