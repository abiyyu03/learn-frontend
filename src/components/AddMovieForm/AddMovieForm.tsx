import { nanoid } from 'nanoid';
import { SetStateAction, useState } from 'react';
import styles from './AddMovieForm.module.css';
import Alert from '../Alert/Alert';


const AddMovieForm = (props: any) => {
    const { movies, setMovies } = props;

    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [imageLink, setImageLink] = useState("");
    const [movieType, setMovieType] = useState("");

    const [isTitleError, setIsTitleError] = useState(false);
    const [isYearError, setIsYearError] = useState(false);
    const [isImageLinkError, setIsImageLinkError] = useState(false);
    const [isMovieTypeError, setIsMovieTypeError] = useState(false);

    //handling form
    function handleTitle(event: { target: { value: SetStateAction<string>; }; }) {
        setTitle(event.target.value);
    }
    function handleMovieType(event: { target: { value: SetStateAction<string>; }; }) {
        setMovieType(event.target.value);
    }
    function handleYear(event: { target: { value: SetStateAction<string>; }; }) {
        setYear(event.target.value);
    }
    function handleImageLink(event: { target: { value: SetStateAction<string>; }; }) {
        setImageLink(event.target.value);
    }

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        if (title === "") {
            setIsTitleError(true);
        } else if (year === "") {
            setIsTitleError(false);
            setIsYearError(true);
        } else if (imageLink === "") {
            setIsImageLinkError(true);
        } else if (movieType === "") {
            setIsMovieTypeError(true);
        } else {
            const newMovie = {
                id: nanoid(10),
                title: title,
                year: year,
                type: movieType,
                poster: imageLink
            };
            console.log(newMovie);
            setMovies([...movies, newMovie]);
            setIsTitleError(false);
            setIsYearError(false);
            setIsMovieTypeError(false);
            setIsImageLinkError(false);
        }

    }

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.form__left}>
                    <img src="https://picsum.photos/536/394" alt="" className={styles.form__image} />
                </div>
                <div className={styles.form__right}>
                    <h3 className={styles.form__title}>Add Movie</h3>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.form__group}>
                            <label htmlFor="" className={styles.form__label}>Title</label><br />
                            <input type="text" className={styles.form__input} value={title} onChange={handleTitle} />
                            {isTitleError && <Alert>Title wajib di isi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="" className={styles.form__label}>Year</label><br />
                            <input type="text" className={styles.form__input} value={year} onChange={handleYear} />
                            {isYearError && <Alert>Year wajib di isi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="" className={styles.form__label}>Image Link</label><br />
                            <input type="text" className={styles.form__input} value={imageLink} onChange={handleImageLink} />
                            {isImageLinkError && <Alert>ImageLink wajib di isi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="" className={styles.form__label}>Movie Type</label><br />
                            <select className={styles.form__input} value={movieType} onChange={handleMovieType}>
                                <option>-</option>
                                <option value="Action">Action</option>
                                <option value="Drama">Drama</option>
                                <option value="Horror">Horror</option>
                                <option value="Comedy">Comedy</option>
                            </select>
                            {isMovieTypeError && <Alert>movieType wajib di isi</Alert>}
                        </div>
                        <button className={styles.form__button}>Add Movie</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddMovieForm;