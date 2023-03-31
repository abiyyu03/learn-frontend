import styles from './AddMovieForm.module.css';

const AddMovieForm = () => {
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.form__left}>
                    <img src="https://picsum.photos/536/394" alt="" className={styles.form__image} />
                </div>
                <div className={styles.form__right}>
                    <h3 className={styles.form__title}>Add Movie</h3>
                    <div className={styles.form__group}>
                        <label htmlFor="" className={styles.form__label}>Title</label><br />
                        <input type="text" className={styles.form__input} />
                    </div>
                    <div className={styles.form__group}>
                        <label htmlFor="" className={styles.form__label}>Year</label><br />
                        <input type="text" className={styles.form__input} />
                    </div>
                    <button className={styles.form__button}>Add Movie</button>
                </div>
            </div>
        </div>
    );
}

export default AddMovieForm;