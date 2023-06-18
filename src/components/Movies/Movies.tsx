import styles from './Movies.module.css';
import Movie from '../Movie/Movie';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

const Movies = (props: any) => {
    const { title } = props;

    const movies = useSelector((store: any) => store.movies.movies);

    console.log(movies);
    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>{props.title || `Latest`} Movies</h2>
                <div className={styles.movies__container}>
                    {movies.map((movie: { id: any; }) => {
                        return <Movie key={movie.id} movie={movie} />;
                    })}
                </div>
            </section>
        </div>
    );
}

export default Movies;