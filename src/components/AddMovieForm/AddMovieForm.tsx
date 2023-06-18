import { nanoid } from 'nanoid';
import { SetStateAction, useState } from 'react';
import styles from './AddMovieForm.module.css';
import Alert from '../Alert/Alert';
import { useDispatch } from 'react-redux';
import Button from '../ui/Button/Button';
import { addMovie } from '../../feature/movieSlice/movieSlice';
import { useNavigate } from 'react-router-dom';


const AddMovieForm = (props: any) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    //handling form
    function handleChange(e: { target: { name: any; value: any; }; }) {
        const { name, value } = e.target;

        setFormData({
            ...formData, [name]: value
        });
    };

    function addMovieData() {
        const newMovie: any = {
            id: nanoid(10),
            title: title,
            year: year,
            type: movieType,
            poster: imageLink
        };
        dispatch(addMovie(newMovie));
        navigate("/");
    }

    function validateForm() {
        if (title === '' && year === '' && movieType === '' && imageLink === '') {
            setIsFormError({
                ...isFormError,
                isTitleError: true, isYearError: true, isMovieTypeError: true, isImageLinkError: true,
            });
        } else if (year === '' && movieType === '' && imageLink === '') {
            setIsFormError({
                ...isFormError,
                isTitleError: false, isYearError: true, isMovieTypeError: true, isImageLinkError: true,
            });
        } else if (title === '' && movieType === '' && imageLink === '') {
            setIsFormError({
                ...isFormError,
                isTitleError: true, isYearError: false, isMovieTypeError: true, isImageLinkError: true,
            });
        } else if (title === '' && year === '' && imageLink === '') {
            setIsFormError({
                ...isFormError,
                isTitleError: true, isYearError: true, isMovieTypeError: false, isImageLinkError: true,
            });
        } else if (title === '' && year === '') {
            setIsFormError({
                ...isFormError,
                isTitleError: true, isYearError: true, isMovieTypeError: false, isImageLinkError: false,
            });
        } else if (title === '' && year === '' && movieType === '') {
            setIsFormError({
                ...isFormError,
                isTitleError: true, isYearError: true, isMovieTypeError: true, isImageLinkError: false,
            });
        } else if (movieType === '' && imageLink === '') {
            setIsFormError({
                ...isFormError,
                isTitleError: false, isYearError: false, isMovieTypeError: true, isImageLinkError: true,
            });
        } else if (year === "" && imageLink === "") {
            setIsFormError({
                ...isFormError,
                isTitleError: false, isYearError: true, isMovieTypeError: false, isImageLinkError: true,
            });
        } else if (year === "") {
            setIsFormError({
                ...isFormError,
                isTitleError: false, isYearError: true, isMovieTypeError: false, isImageLinkError: false,
            });
        } else if (title === "") {
            setIsFormError({
                ...isFormError,
                isTitleError: true, isYearError: false, isMovieTypeError: false, isImageLinkError: false,
            });
        } else if (movieType === "") {
            setIsFormError({
                ...isFormError,
                isTitleError: false, isYearError: false, isMovieTypeError: true, isImageLinkError: false,
            });
        } else if (imageLink === "") {
            setIsFormError({
                ...isFormError,
                isTitleError: false, isYearError: false, isMovieTypeError: false, isImageLinkError: true,
            });
        } else {
            setIsFormError({
                ...isFormError,
                isTitleError: false, isYearError: false, isMovieTypeError: false, isImageLinkError: false,
            });
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
                        {/* <button className={styles.form__button}>Add Movie</button> */}
                        <Button variant="primary" buttonSize="md" full>Add Movie</Button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddMovieForm;