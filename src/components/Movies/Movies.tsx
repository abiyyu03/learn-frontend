import styles from './Movies.module.css';
import Movie from '../Movie/Movie';
import Counter from '../Counter';
import data from '../../utils/constants/data';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const Movies = (props: any) => {
    const { movies, setMovies } = props;
    const handleClick = () => {
        const movie = {
            id: nanoid(),
            title: "Jigsaw digidaw",
            year: 2023,
            type: "movie",
            poster: "https://picsum.photos/300/400"
        };

        // Movies.push(movie);
        setMovies([...movies, movie]);
    }
    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                <div className={styles.movies__container}>
                    {movies.map((movie: { id: any; }) => {
                        return <Movie key={movie.id} movie={movie} />;
                    })}
                </div>
                <button onClick={handleClick}>Add Movie</button>
                {/* <Counter /> */}
            </section>
        </div>
    );
}

export default Movies;