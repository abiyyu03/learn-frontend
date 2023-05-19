import { nanoid } from 'nanoid';
import { SetStateAction, useState } from 'react';
import styles from './AddMovieForm.module.css';
import Alert from '../Alert/Alert';


const AddMovieForm = (props: any) => {
    const { movies, setMovies } = props;

    const [formData, setFormData] = useState({
        title: "",
        year: "",
        imageLink: "",
        movieType: "",
    });
    const [isFormError, setIsFormError] = useState({
        isTitleError: false,
        isYearError: false,
        isImageLinkError: false,
        isMovieTypeError: false,
    });

    const { title, year, imageLink, movieType } = formData;
    const { isTitleError, isYearError, isImageLinkError, isMovieTypeError } = isFormError;

    //handling error
    function handlingError(key: any, value: boolean) {
        setIsFormError({
            ...isFormError, [key]: value
        });
    }
    //handling form
    function handleChange(e: { target: { name: any; value: any; }; }) {
        const { name, value } = e.target;

        setFormData({
            ...formData, [name]: value
        });
    };

    // function handleTitle(event: { target: { value: SetStateAction<string>; }; }) {
    //     setTitle(event.target.value);
    // }
    function addMovieData() {
        const newMovie = {
            id: nanoid(10),
            title: title,
            year: year,
            type: movieType,
            poster: imageLink
        };
        setMovies([...movies, newMovie]);
    }

    function validateForm() {
        if (title === '') {
            // setIsFormError({ ...isFormError, isTitleError: true });
            handlingError('isTitleError', true);
        } else if (year === "") {
            // setIsFormError({ ...isFormError, isYearError: true });
            // handlingError('isTitleError', false);
            handlingError('isYearError', true);
            // handlingError('isTitleError', false);
            // handlingError('isImageLinkError', true);
            // handlingError('isMovieTypeError', true);
        } else if (imageLink === "") {
            handlingError('isImageLinkError', true);
        } else if (movieType === "") {
            handlingError('isMovieTypeError', true);
        } else {
            handlingError('isTitleError', false);
            handlingError('isYearError', false);
            handlingError('isMovieTypeError', false);
            handlingError('isImageLinkError', false);
            addMovieData();
        }
    }

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        validateForm();
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
                            <input type="text" className={styles.form__input} value={title} name="title" onChange={handleChange} />
                            {isTitleError && <Alert>Title wajib di isi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="" className={styles.form__label}>Year</label><br />
                            <input type="text" className={styles.form__input} value={year} name="year" onChange={handleChange} />
                            {isYearError && <Alert>Year wajib di isi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="" className={styles.form__label}>Image Link</label><br />
                            <input type="text" className={styles.form__input} value={imageLink} name="imageLink" onChange={handleChange} />
                            {isImageLinkError && <Alert>ImageLink wajib di isi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="" className={styles.form__label}>Movie Type</label><br />
                            <select className={styles.form__input} value={movieType} name="movieType" onChange={handleChange}>
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